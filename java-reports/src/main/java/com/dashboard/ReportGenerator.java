package com.dashboard;


import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfWriter;
import org.json.JSONObject;


import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.nio.charset.StandardCharsets;


public class ReportGenerator {


public static void main(String[] args) {
try {
// Read JSON data
File file = new File("data/metrics.json");
FileInputStream fis = new FileInputStream(file);
String jsonText = new String(fis.readAllBytes(), StandardCharsets.UTF_8);
JSONObject data = new JSONObject(jsonText);


// Create PDF
Document document = new Document();
PdfWriter.getInstance(document, new FileOutputStream("DashboardReport.pdf"));
document.open();


Font title = new Font(Font.FontFamily.HELVETICA, 18, Font.BOLD);
document.add(new Paragraph("Dashboard Summary Report", title));
document.add(new Paragraph("\n"));


document.add(new Paragraph("Year: " + data.getString("year")));
document.add(new Paragraph("GDP Growth: " + data.getString("gdp")));
document.add(new Paragraph("Revenue Growth: " + data.getString("revenue")));
document.add(new Paragraph("Expenditure Status: " + data.getString("expenditure")));


document.add(new Paragraph("\nReport generated using Java & Maven."));
document.close();


System.out.println("PDF generated successfully!");


} catch (Exception e) {
e.printStackTrace();
}
}
}