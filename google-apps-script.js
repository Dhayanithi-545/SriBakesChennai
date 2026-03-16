const SHEET_NAME = "Orders"; // Change if your sheet tab has a different name

function doPost(e) {
    try {
        // Log the incoming request for debugging
        Logger.log("Received request: " + e.postData.contents);
        
        let data;
        
        // Handle both JSON and URL-encoded data
        if (e.postData.contents) {
            // Try to parse as JSON first
            try {
                data = JSON.parse(e.postData.contents);
                Logger.log("Parsed JSON data: " + JSON.stringify(data));
            } catch (jsonError) {
                // If JSON fails, try URL-encoded
                try {
                    const params = e.postData.contents.split('&').reduce((acc, param) => {
                        const [key, value] = param.split('=');
                        if (key === 'data') {
                            acc = JSON.parse(decodeURIComponent(value));
                        }
                        return acc;
                    }, {});
                    data = params;
                    Logger.log("Parsed URL-encoded data: " + JSON.stringify(data));
                } catch (urlError) {
                    Logger.log("Failed to parse data: " + urlError.message);
                    return ContentService
                        .createTextOutput(JSON.stringify({ status: "error", message: "Invalid data format" }))
                        .setMimeType(ContentService.MimeType.JSON);
                }
            }
        } else {
            Logger.log("No data received");
            return ContentService
                .createTextOutput(JSON.stringify({ status: "error", message: "No data received" }))
                .setMimeType(ContentService.MimeType.JSON);
        }

        // Get the spreadsheet and sheet
        const ss = SpreadsheetApp.getActiveSpreadsheet();
        let sheet = ss.getSheetByName(SHEET_NAME);

        // Create the sheet and header row if it doesn't exist yet
        if (!sheet) {
            Logger.log("Creating new sheet: " + SHEET_NAME);
            sheet = ss.insertSheet(SHEET_NAME);
            sheet.appendRow([
                "Submitted At",
                "Customer Name",
                "Mobile Number",
                "Event Date",
                "Delivery Location",
            ]);

            // Bold header row
            sheet.getRange(1, 1, 1, 5).setFontWeight("bold");
        }

        // Append customer row
        const rowData = [
            new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
            data.name || "",
            data.phone || "",
            data.eventDate || "",
            data.deliveryLocation || "",
        ];
        
        Logger.log("Appending row: " + JSON.stringify(rowData));
        sheet.appendRow(rowData);

        // Return success response
        const response = { status: "ok", message: "Data saved successfully", data: rowData };
        Logger.log("Returning success: " + JSON.stringify(response));
        
        return ContentService
            .createTextOutput(JSON.stringify(response))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (err) {
        Logger.log("Error occurred: " + err.message);
        return ContentService
            .createTextOutput(JSON.stringify({ status: "error", message: err.message }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

// Health-check — open the web app URL in a browser to verify it's working
function doGet() {
    return ContentService
        .createTextOutput(JSON.stringify({ status: "Sri Bakes webhook is live ✓" }))
        .setMimeType(ContentService.MimeType.JSON);
}
