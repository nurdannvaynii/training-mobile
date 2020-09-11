import { Component, OnInit } from '@angular/core';
import { Member } from "../member";
import { MEMBERS } from "../members";

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {
 
  members= MEMBERS;
  selectedMember: Member;

  constructor() { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){

    console.log("on init members");
  }

  onSelect(member: Member){
    this.selectedMember = member;
  }
}
