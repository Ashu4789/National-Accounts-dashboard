package com.dashboard.reports.service;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.*;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.util.List;
import java.util.Map;

@Service
public class ReportGenerator {

    public byte[] generateGDPReport(List<Map<String, Object>> data) {
        return generateTablePDF(
                "GDP Report (India)",
                new String[]{"Year", "GDP (USD Billion)", "Growth (%)"},
                data,
                new String[]{"year", "value", "growth"}
        );
    }

    public byte[] generateInflationReport(List<Map<String, Object>> data) {
        return generateTablePDF(
                "Inflation Report (India)",
                new String[]{"Year", "Rural", "Urban", "Combined"},
                data,
                new String[]{"year", "rural", "urban", "combined"}
        );
    }

    public byte[] generateFiscalReport(List<Map<String, Object>> data) {
        return generateTablePDF(
                "Fiscal Deficit Report (India)",
                new String[]{"Year", "Deficit (% of GDP)"},
                data,
                new String[]{"year", "deficit"}
        );
    }

    private byte[] generateTablePDF(
            String title,
            String[] headers,
            List<Map<String, Object>> data,
            String[] keys
    ) {
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        try {
            Document document = new Document();
            PdfWriter.getInstance(document, out);
            document.open();

            document.add(new Paragraph(title, FontFactory.getFont(FontFactory.HELVETICA_BOLD, 16)));
            document.add(new Paragraph(" "));
            PdfPTable table = new PdfPTable(headers.length);

            for (String header : headers) {
                table.addCell(new PdfPCell(new Phrase(header)));
            }

            for (Map<String, Object> row : data) {
                for (String key : keys) {
                    table.addCell(row.get(key).toString());
                }
            }

            document.add(table);
            document.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return out.toByteArray();
    }
}
