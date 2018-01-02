import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  options = [];
  selectedOption;

  ngOnInit() {
    /*模拟服务器异步加载*/
    setTimeout(_ => {
      this.options = [
        {value: 'jack', label: 'Jack'},
        {value: 'lucy', label: 'Lucy'},
        {value: 'disabled', label: 'Disabled', disabled: true}
      ];
      this.selectedOption = this.options[0];
    }, 100);
  }

  compareFn(val1, val2) {
    if (val1.value == val2.value) {
      return true;
    } else {
      return false;
    }

  }

  edit() {
    /**
     * 此处模拟 编辑时 我把 selectedOption 改成已经选择过的内容
     *
     */
    this.selectedOption = {value: 'lucy', label: 'Lucy'};
  }
}
