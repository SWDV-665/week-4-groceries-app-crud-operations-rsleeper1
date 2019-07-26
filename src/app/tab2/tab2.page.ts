import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '.././groceries-service.service';
import { InputDialogServiceService } from '.././input-dialog-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  title = "Grocery List";
  
  constructor(public toastController: ToastController, public alertController: AlertController, public dataService: GroceriesServiceService, public inputDialogService: InputDialogServiceService) {}

  loadItems(){
    return this.dataService.getItems();
  }

  async removeItem(item, index) {
    const toast = await this.toastController.create({
      message: 'Removing item - ' + item.name + "...",
      duration: 2000
    });
    toast.present();

    this.dataService.removeItem(index);
  }

  async editItem(item, index) {
    const toast = await this.toastController.create({
      message: 'Edit item - ' + item.name + "...",
      duration: 2000
    });
    toast.present();
    this.inputDialogService.showPrompt(item, index);

  }

  addNewItem(){
    this.inputDialogService.showPrompt();
  }

  

}
