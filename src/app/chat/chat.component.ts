import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  @Input() conversation: any;
  emojiPickerVisible: any;
  message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  // @ts-ignore
  submitMessage(event: any) {
    let value = event.target.value.trim();
    event.target.value = '';
    if (value.length < 1) return false;
    this.conversation.latestMessage = value;
    this.conversation.messages.unshift({
      id: 1,
      body: value,
      time: '10:10',
      me: true
    })
  }

  addEmoji(event: any) {
    this.message += event.emoji.native;
    // @ts-ignore
    document.getElementById('emoji').style.display = 'none';
  }

  ngOnDestroy() {
  }

}
