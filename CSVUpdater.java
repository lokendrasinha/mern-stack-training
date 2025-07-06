import java.io.*;
import java.util.*;

public class CSVUpdater {
    public static void main(String[] args) {
        String filePath = "data.csv"; // Replace with your file path
        List<String[]> rows = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            String line;

            // Read header
            String headerLine = br.readLine();
            String[] headers = headerLine.split(",");
            int perIndex = -1;

            // Find index of "PER" column
            for (int i = 0; i < headers.length; i++) {
                if (headers[i].equalsIgnoreCase("PER")) {
                    perIndex = i;
                    break;
                }
            }

            if (perIndex == -1) {
                System.out.println("PER column not found.");
                return;
            }

            rows.add(headers); // Add header

            // Read and update rows
            while ((line = br.readLine()) != null) {
                String[] row = line.split(",");
                int per = Integer.parseInt(row[perIndex]);
                row[perIndex] = String.valueOf(per + 2);
                rows.add(row);
            }

            // Display updated rows
            System.out.println("Updated CSV:");
            for (String[] row : rows) {
                System.out.println(String.join(",", row));
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
