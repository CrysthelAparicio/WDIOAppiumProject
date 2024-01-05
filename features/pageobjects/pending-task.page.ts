import { $ } from '@wdio/globals';

class PendingTaskPage {
    
    public get textAll () {
        return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/category_text" and @text="All"]');
    }
    
    public get btnCheckTask () {
        return $('(//android.view.View[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_check"])[1]');
    }

    public get btnCheckTaskSelected () {
        return $('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_text" and @selected="true"]');
    }

    public get btnTabMine () {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/mine_layout');
    }

    public get elementsPending () {
        return $$('//android.widget.TextView[@resource-id="todolist.scheduleplanner.dailyplanner.todo.reminders:id/task_text" and @selected="false"]');
    }

    public get elementsPendingMine () {
        return $('id:todolist.scheduleplanner.dailyplanner.todo.reminders:id/pending_tasks_number');
    }

    async wait(milliseconds: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    public async clickCheckTask () {
        await this.btnCheckTask.click();
    }

    public async assertionCheckTaskSelected () {
        await expect(this.btnCheckTaskSelected).toBeDisplayed(); 
    }

    public async clickTabMine () {
        await this.btnTabMine.click();
        await this.wait(5000)
    }

    public async getQuantityPending(){
        const elementsCount = this.elementsPending.length;
        return elementsCount;
    }

    public async validatePendingTask(quantity: string){
        const textPending = await this.elementsPendingMine.getText();
        await expect(quantity).toEqual(textPending);
    }

}

export default new PendingTaskPage();
