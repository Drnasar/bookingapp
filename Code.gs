function doGet(e){
var template = HtmlService.createTemplateFromFile('index');
// Build and return HTML in IFRAME sandbox mode.
return template.evaluate()
.setTitle('Web App Window Title')
.setSandboxMode(HtmlService.SandboxMode.IFRAME)
.addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function submitForm(data) {
  var sheet = SpreadsheetApp.openById("1NbPTceAiXoCB5rMcpAfZeunijXdU-okQ3PTDiZ7KNRE").getSheetByName("Data");
  sheet.appendRow([data.name, data.phone,  data.date, data.time , "Pending"]);
  
  return "Form submitted successfully!";
}
