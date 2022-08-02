import { Component, ViewChild } from '@angular/core';
import { ComboBoxComponent } from '@syncfusion/ej2-angular-dropdowns';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';
  @ViewChild("sample")
  public comboObj!: ComboBoxComponent;
  public addNewItem(){
    // get the typed characters
    let customValue: string = (this.comboObj.element.getElementsByClassName('e-input')[0] as HTMLInputElement).value;
    // make new object based on typed characters
    let newItem: { [key: string]: Object; } = {'FirstName': customValue, 'EmployeeID': (this.comboObj.dataSource as Object[]).length + 1, 
                    'Designation': 'Developer'};
    // new object added to data source.
    (this.comboObj.dataSource as Object[]).push(newItem);
    // close the popup element.
    this.comboObj.hidePopup();
    // pass new object to addItem method.
    this.comboObj.addItem(newItem);
    // select the newly added item.
    this.comboObj.value = customValue;
  }

  public fieldSettings: object = { value: 'EmployeeID', text: 'FirstName'};
  public employeeData: object[] = [
    {
      "EmployeeID": 1,
      "FirstName": "Andrew Fuller",
      "Designation": "Team Lead",
      "Country": "England",
      "isImgUploaded": true
    },
    {
      "EmployeeID": 2,
      "FirstName": "Anne Dodsworth",
      "Designation": "Developer",
      "Country": "USA",
      "isImgUploaded": true
    },
    {
      "EmployeeID": 3,
      "FirstName": "Janet Leverling",
      "Designation": "HR",
      "Country": "USA",
      "isImgUploaded": true
    },
    {
      "EmployeeID": 4,
      "FirstName": "Laura Callahan",
      "Designation": "Product Manager",
      "Country": "USA",
      "isImgUploaded": true
    },
    {
      "EmployeeID": 5,
      "FirstName": "Margaret Peacock",
      "Designation": "Developer",
      "Country": "USA",
      "isImgUploaded": true
    },
    {
      "EmployeeID": 6,
      "FirstName": "Michael Suyama",
      "Designation": "Team Lead",
      "Country": "USA",
      "isImgUploaded": true
    },
    {
      "EmployeeID": 7,
      "FirstName": "Nancy Davolio",
      "Designation": "Product Manager",
      "Country": "USA",
      "isImgUploaded": true
    },
    {
      "EmployeeID": 8,
      "FirstName": "Robert King",
      "Designation": "Developer ",
      "Country": "England",
      "isImgUploaded": true
    },
    {
      "EmployeeID": 9,
      "FirstName": "Steven Buchanan",
      "Designation": "CEO",
      "Country": "England",
      "isImgUploaded": true
    }
  ]
}
