import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../shared/service/http.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Customer } from "./customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  activeView: string;
  customerData: Customer[];
  page: string;
  paginationTotalPage: number;
  paginationActiveNumber: number ;

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('customerViewMode') != null){ 
      this.activeView = localStorage.getItem('customerViewMode');
    }

    this.page = this.route.snapshot.paramMap.get('id');
    this.getCstDataFromServer(this.page);
  }

  getCstDataFromServer(page: string) {
    let pageToUrl = (page.length == 1) ? `0${page}` : page;
    this.httpService.requestWithGet(`list_customer/${pageToUrl}`).subscribe((res)=>{
      this.customerData = res.customerList;
      this.paginationTotalPage = res.totalPages;
      this.paginationActiveNumber = +page;
    }, (error) => {
       console.log("customer error: ", error);
    });
  }

  changeViewOption(viewMode) {
    console.log(`paginationTotalPage(${this.paginationTotalPage}) | paginationActiveNumber(${this.paginationActiveNumber})`);
    this.activeView = viewMode;
    localStorage.setItem('customerViewMode', viewMode);
  }

  addCustomer() {
    console.log("*addCustomer");
  }

  recieveInputFilter(value: string) {
    if(value !== ''){
      this.httpService.requestWithGet('search_customer').subscribe((res)=>{
        this.customerData = res.customerList;
        this.paginationTotalPage = res.totalPages;
      }, (error) => {
         console.log("customer error: ", error);
      });
    }
    else{
      this.router.navigate(['/customer/01']);
      this.getCstDataFromServer('1');
    }
  }

  onClicPagination(activeNumber: number) {
    this.router.navigate([`/customer/0${activeNumber}`]);
    this.getCstDataFromServer(`${activeNumber}`);
  }

}
