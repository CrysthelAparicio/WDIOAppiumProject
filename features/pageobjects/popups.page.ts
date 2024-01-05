import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PopupsPage {
    valueItem="";

    public get btnMenu () {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/ic_menu');
    }

    public get btnUpdatePro () {
        return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/tv_menu_list_title" and @text="Upgrade to PRO"]');
    }

    public get btnStarTasks () {
        return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/tv_menu_list_title" and @text="Star Tasks"]');
    }

    public get btnCategory () {
        return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/tv_menu_list_title" and @text="Category"]');
    }

    public get btnWidget () {
        return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/tv_menu_list_title" and @text="Widget"]');
    }

    public get btnDonate () {
        return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/tv_menu_list_title" and @text="Donate"]');
    }

    public get btnFeedback () {
        return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/tv_menu_list_title" and @text="Feedback"]');
    }

    public get TextUpdatePro () {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/toolbar_title');
    }

    public get TextTitleSub () {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/toolbar_title_sub');
    }

    public get btnback () {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/toolbar_back');
    }

    public get btnDialogClose() {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/dialog_close');
    }
   
    public get textAll () {
        return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/category_text" and @text="All"]');
    }

    public get TextMontly() {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/month_title');
    }

    public get TextPermanent() {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/onetime_title');
    }

    public get TextAnual() {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/vip_year_title');
    }

    public get btnPermanent() {
        return $('(//android.widget.ImageView[@class="android.widget.ImageView"])[8]');
    }

    public get btnContinue() {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/vip_continue_layout');
    }

    public get NewWindows() {
        return $('(//android.widget.FrameLayout[@class="android.widget.FrameLayout"])[1]');
    }

    public get btnok() {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/dismiss');
    }



     
   /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async wait(milliseconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
    }
    public async home () {
        await expect(this.textAll).toHaveTextContaining('All');
        await this.wait(2000);

    }

    public async TabThreeLines () {
        await this.btnMenu.click();
        await this.wait(2000);

    }

    public async TabUpdatePro () {
        await this.btnUpdatePro.click();
        await this.wait(2000);

    }
    
     public async MenuOptionsDisplayed () {
        await expect(this.btnUpdatePro).toBeDisplayed();
        await expect(this.btnUpdatePro).toHaveTextContaining('Upgrade to PRO');
        await expect(this.btnStarTasks).toBeDisplayed();
        await expect(this.btnStarTasks).toHaveTextContaining('Star Tasks');
        await expect(this.btnFeedback).toBeDisplayed();
        await expect(this.btnFeedback).toHaveTextContaining('Feedback');
        await expect(this.btnCategory).toBeDisplayed();
        await expect(this.btnCategory).toHaveTextContaining('Category');
        await expect(this.btnDonate).toBeDisplayed();
        await expect(this.btnDonate).toHaveTextContaining('Donate');

        await this.wait(2000);

    }
    public async AssertionInformation () {
        await expect(this.TextTitleSub).toBeDisplayed();
        await expect(this.TextTitleSub).toHaveTextContaining('Unlock all PRO features');
        await expect(this.TextUpdatePro).toBeDisplayed();
        await expect(this.TextUpdatePro).toHaveTextContaining('Upgrade to PRO');
        await this.wait(2000);

    }
    public async TapBack () {
        await this.btnback.click();
        await this.wait(2000);

    }
    public async TapDialogClose () {
        await this.btnDialogClose.click();
        await this.wait(2000);
      
    }

    public async AssertionPaidOption () {
        await expect(this.TextMontly).toBeDisplayed();
        await expect(this.TextMontly).toHaveTextContaining('Monthly');
        await expect(this.TextPermanent).toBeDisplayed();
        await expect(this.TextPermanent).toHaveTextContaining('Permanent');
        await expect(this.TextAnual).toBeDisplayed();
        await expect(this.TextAnual).toHaveTextContaining('Annual');
        await this.wait(2000);

    }

    public async TapPermanent () {
        await this.btnPermanent.click();
        await this.wait(2000);
      
    }

    public async VerifyNewWindows () {
        await expect(this.NewWindows).toBeDisplayed();
        await this.wait(2000);
      
    }

    public async TapContinue () {
        await this.btnContinue.click();
        await this.wait(2000);
      
    }

    public async TapOK () {
        await this.btnok.click();
        await this.wait(2000);
      
    }
    
 
}

export default new PopupsPage();
