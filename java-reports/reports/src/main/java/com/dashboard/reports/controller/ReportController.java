package com.dashboard.reports.controller;

import com.dashboard.reports.service.ReportGenerator;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins = "http://localhost:3000")
public class ReportController {

    private final ReportGenerator reportGenerator;

    public ReportController(ReportGenerator reportGenerator) {
        this.reportGenerator = reportGenerator;
    }

    @PostMapping("/gdp")
    public ResponseEntity<byte[]> downloadGDP(@RequestBody List<Map<String, Object>> data) {
        byte[] pdf = reportGenerator.generateGDPReport(data);
        return buildResponse(pdf, "gdp-report.pdf");
    }

    @PostMapping("/inflation")
    public ResponseEntity<byte[]> downloadInflation(@RequestBody List<Map<String, Object>> data) {
        byte[] pdf = reportGenerator.generateInflationReport(data);
        return buildResponse(pdf, "inflation-report.pdf");
    }

    @PostMapping("/fiscal")
    public ResponseEntity<byte[]> downloadFiscal(@RequestBody List<Map<String, Object>> data) {
        byte[] pdf = reportGenerator.generateFiscalReport(data);
        return buildResponse(pdf, "fiscal-report.pdf");
    }

    private ResponseEntity<byte[]> buildResponse(byte[] pdf, String fileName) {
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + fileName)
                .contentType(MediaType.APPLICATION_PDF)
                .body(pdf);
    }
}
