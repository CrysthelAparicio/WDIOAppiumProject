import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TaskPage {
    valueItem="";

    public get MessageValidationCreateTask () {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_none');
    }

    public get btnAddTask () {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/iv_task_add');
    }

    public get btnTask () {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/tasks_img');
    }

    public get btnMenu () {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/ic_menu');
    }

    public get btnCalendar () {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/calendar_img');
    }

    public get btnMine () {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/mine_img');
    }

    public get btnAll () {
        return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/category_text" and @text="All"]');
    }

    public get btnWork () {
        return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/category_text" and @text="Work"]');
    }

    public get btnPersonal () {
        return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/category_text" and @text="Personal"]');
    }

    public get btnWishlist () {
        return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/category_text" and @text="Wishlist"]');
    }
    public get btnCategory () {
        return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/tv_menu_list_title" and @text="Category"]');
    }

    public get inputNewTask () {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_create_input');
    }

    public get btnNewCategory () {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/item_icon2');
    }

    public get btnCreateCalendar () {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_create_calendar');
    }

    public get btnCreateItems () {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_create_items');
    }

    public get btnTaskCreate () {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_create_btn');
    }
    public get textAll () {
        return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/category_text" and @text="All"]');
    }
     public get taskItem(){
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_text');
     }
     public get inputNewCategory(){
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/dialog_input');
     }
     public get btnSaveCategory(){
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/dialog_confirm');
     }
     public get categoryTaps(){
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_detail_category_layout');
     }
     public get categoryPersonal(){
        return $('(//android.widget.LinearLayout[@class="android.widget.LinearLayout"])[4]');
     }
     public get categoryBack(){
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/toolbar_back');
     }
     public get personalTab(){
        return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/item_text" and @text="Personal"]');
     }
     public get dateDue(){
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/detail_due_date_layout');
     }
     public get calendarNetx(){
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/iv_month_next');
     }
     public get calendarDone(){
       
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/tv_confirm');
     }
     public get calendarBack(){

        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/toolbar_back');
     }
     public get calendarDate(){

        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_time');
     }
     public get templateTask(){

        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_tpl');
     }
     public get keepReading(){

        return $('(//android.widget.LinearLayout[@class="android.widget.LinearLayout"])[5]');
     }
     public get addKeepReading(){

        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_tpl_add');
     }
     public get todayTitle(){

        return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/label_text" and @text="Today"]');
     }

     public get detailsTask(){

        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_detail_more');
     }
     public get detailsTaskDelete(){

        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/detail_delete');
     }
     public get detailsTaskDeleteConfirm(){

        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/dialog_confirm');
     }
     
     public get btnContinue(){
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/welcome_start');
     }
     
     public get btnCloseOffer(){
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/toolbar_back');
     }

     public get btnCloseDialog(){
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/dialog_close');
     }

   /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async wait(milliseconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    public async home () {
        
         await this.btnContinue.click();
         await this.btnCloseOffer.click();
         await this.btnCloseDialog.click();
         
         await expect(this.textAll).toHaveTextContaining('All');
         await this.wait(2000);
 
     }

    public async TabTask () {
        await this.btnTask.click();
        await this.wait(2000);

    }
    public async AssertionMessageDisplayed () {
         await expect(this.MessageValidationCreateTask).toHaveTextContaining('Click here to create your first task.');
         await this.wait(2000);
 
     }

     public async blueButtonDisplayed () {
        await expect(this.btnAddTask).toBeDisplayed();
        await this.wait(2000);

    }
    //---------------------------------------------------AC-09-----------------------------------------------------//

    public async userTapsBlueNewTask () {
        await this.btnAddTask.click();
        await this.wait(2000);

    }
    public async inputTaskNameDisplayed () {
        await expect(this.inputNewTask).toBeDisplayed();
        await expect(this.inputNewTask).toHaveTextContaining('Input new task here');
        await this.wait(2000);

    }
    public async tapsOnTaskName () {
        await this.inputNewTask.click();
        await this.wait(2000);

    }
    public async enterNewName () {
        const random = Math.floor((Math.random() * 1000));
        this.valueItem='My Task - ' + random;
        await this.inputNewTask.setValue(this.valueItem);
        await this.wait(5000);
      
    }
    public async clickButtonSend () {
        await this.btnTaskCreate.click();
        await this.wait(5000);

        let estado = false
        try{
            await expect(this.btnTaskCreate).toBeDisplayed();
            estado = true
        }catch(e){
            estado = false
        }
        if(estado){
            await browser.back();
            await browser.back();
        }

    }
    public async displayedIntoDashboard () {
        await expect(this.taskItem).toBeDisplayed();
        await expect(this.taskItem).toHaveTextContaining(this.valueItem);
        await this.wait(2000);

    }

    //---------------------------------------------------AC-11-----------------------------------------------------//

    public async clickMainMenu () {
        await this.btnMenu.click();
        await this.wait(2000);

    }
    public async tapsCategory () {
        await this.btnCategory.click();
        await this.wait(2000);

    }
    public async categoryTapsCreateNew () {
        await this.btnNewCategory.click();
        await this.wait(2000);

    }
    public async enterCategoryName () {
        const random = Math.floor((Math.random() * 1000));
        this.valueItem='ejercicio' + random;
        await this.inputNewCategory.setValue(this.valueItem);
        await this.wait(5000);

    }
    public async categoryTapsOnSaveButton () {
        await this.btnSaveCategory.click();
        await this.wait(5000);

    }
    public async newCategoryDisplayed () {
        const itemTitle = $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/category_text" and @text="'+this.valueItem+'"]');
        await expect(itemTitle).toHaveTextContaining(this.valueItem);
        await this.wait(2000);

    }
 //---------------------------------------------------AC-12-----------------------------------------------------//

    public async clickTaskCreated () {
        // await driver.touchAction({actions: 'tap', x: 1238, y: 1451});
        // await driver.touchAction({actions: 'tap', x: 1234, y: 1451});
        // await driver.touchAction({actions: 'tap', x: 1256, y: 1455});
        await driver.touchAction({
            action: 'tap', x: 1238, y: 1451
        });
        await driver.touchAction({
            action: 'tap', x: 1234, y: 1451
        });
        await driver.touchAction({
            action: 'tap', x: 1256, y: 1455
        });
        
        await this.taskItem.click();
        await this.wait(2000);

    }
    public async tapsNoCategory () {
        await this.categoryTaps.click();
        await this.wait(2000);

    }
    public async selectCategoryBefore () {
        await this.categoryPersonal.click();
        await this.wait(2000);

    }
    public async verifyCategoryAdded () {
        await this.categoryBack.click();
        await this.wait(2000);
        await this.btnMenu.click();
        await this.wait(2000);
        await this.btnCategory.click();
        await this.wait(2000);
        await this.personalTab.click();
        await this.wait(2000);
        await expect(this.taskItem).toHaveTextContaining(this.valueItem);
        await this.wait(5000);

    }

    //---------------------------------------------------AC-13----------------------------------------------------//

    public async tapsCalendarDueDate () {
        await this.dateDue.click();
        await this.wait(2000);

    }
    public async selectDateLater () {
        await this.calendarNetx.click();
        await this.wait(2000);
        await driver.touchAction({
            action: 'tap', x: 886, y: 565
        });
        await this.wait(2000);

    }
    public async clickDoneCalendar () {
        await this.calendarDone.click();
        await this.wait(2000);

    }
    public async verifyAddedCalendar () {
        await this.calendarBack.click();
        await this.wait(2000);
        await expect(this.calendarDate).toHaveTextContaining('02-01');
        await this.wait(5000);

    }
       //---------------------------------------------------AC-14----------------------------------------------------//

       public async pressesTemplate () {
        await this.templateTask.click();
        await this.wait(2000);

    }
    public async choosesTemplate () {
        await this.keepReading.click();
        await this.wait(2000);

    }
    public async addMyList () {
        await this.addKeepReading.click();
        await this.wait(2000);
        await driver.touchAction({
            action: 'tap', x: 1238, y: 1451
        });
        await driver.touchAction({
            action: 'tap', x: 1234, y: 1451
        });
        await driver.touchAction({
            action: 'tap', x: 1256, y: 1455
        });
        await this.wait(2000);
    }
    public async enteredControlPanel () {

        await expect(this.todayTitle).toHaveTextContaining('Today');
        await this.wait(5000);

    }
     //---------------------------------------------------AC-15----------------------------------------------------//

     public async clickPointMenu () {
        await this.detailsTask.click();
        await this.wait(2000);

    }
    public async clickDelete () {
        await this.detailsTaskDelete.click();
        await this.wait(2000);
        await this.detailsTaskDeleteConfirm.click();
        await this.wait(2000);

    }

    public async noLongerDisplayed () {

        await expect(this.taskItem).not.toExist()
        await this.wait(5000);

    }
 
}

export default new TaskPage();
