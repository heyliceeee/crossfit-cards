import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-training-homepage',
  templateUrl: './training-homepage.component.html',
  styleUrls: ['./training-homepage.component.css']
})
export class TrainingHomepageComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  closeResult: string = '';

  ngOnInit(): void {
    $("#btnGlobal").click(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/3global";
      }, 200);
    })


    $("#btnLeg").click(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/3leg";
      }, 200);
    })


    $("#btnUpperBody").click(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/3upperbody";
      }, 200);
    })


    $("#btnCore").click(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/3core";
      }, 200);
    })


    $("#btnCardio").click(function (){
      window.setTimeout(function (){
        window.location.href = "/homepage/singleplayer/3cardio";
      }, 200);
    })
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
