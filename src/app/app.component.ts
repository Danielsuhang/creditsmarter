import { Component, OnInit, Inject } from '@angular/core';
import { CreditCard } from './model/credit_card';

import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CourseDialogComponentComponent } from './course-dialog-component/course-dialog-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  credit_card: CreditCard[];
  original: CreditCard[];

  highest: CreditCard;
  highScore: number;

  option: string;
  monthly_spending: number;
  exposed: boolean;

  homepage: boolean = true;
  socialpage: boolean = false;
  historypage: boolean = false;
  securitypage: boolean = false;

  gas: number;
  restaurant: number;
  grocery: number;

  step: number = 1;

  percentPaidOff: number;

  checked1: boolean;
  checked2: boolean;
  checked3: boolean;
  checked4: boolean;



  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.percentPaidOff = 0;
    this.restaurant = 0;
    this.grocery = 0;
    this.gas = 0;
    this.credit_card = [

      {
        name: "Savor Rewards",
        src: "../assets/pictures/savor-card-art.png",
        info: "Earn unlimited 4% cash back on dining and entertainment, 2% at grocery stores, and 1% on all other purchases. Earn a one-time $500 cash bonus once you spend $3,000 on purchases within 3 months from account opening. ",
        customerSat: 4.0,
        annualFee: 95,
        APR: 20.24,
        cashbackGrocery: 2,
        cashbackRestaurant: 4,
        cashbackGas: 0,
        score: 2,


      },
      {
        name: "SavorOne Rewards",
        src: "../assets/pictures/SavorOneRewards.png",
        info: "Earn unlimited 3% cash back on dining and entertainment, 2% at grocery stores and 1% on all other purchases. Earn a one-time $150 cash bonus once you spend $500 on purchases within the first 3 months from account opening. ",
        customerSat: 4.7,
        annualFee: 0,
        APR: 19.74,
        cashbackRestaurant: 3,
        cashbackGrocery: 2,
        cashbackGas: 0,
        score: 2,



      },
      {
        name: "Quicksilver Rewards",
        src: "../assets/pictures/quicksilverrewards.png",
        info: "Earn unlimited 1.5% cash back on every purchase, every day. Earn a one-time $150 cash bonus once you spend $500 on purchases within 3 months from account opening. ",
        customerSat: 4.6,
        annualFee: 0,
        APR: 19.74,
        cashbackRestaurant: 1.5,
        cashbackGrocery: 1.5,
        cashbackGas: 0,
        score: 2,


      },

      {
        name: "QuicksilverOne Rewards",
        src: "../assets/pictures/quicksilveronerewards.png",
        info: "Earn unlimited 1.5% cash back on every purchase, every day.Enjoy unlimited access to your credit score and tools to help you monitor your credit profile with CreditWise from Capital One®.  ",
        customerSat: 4.6,
        annualFee: 39,
        APR: 24.98,
        cashbackRestaurant: 1.5,
        cashbackGrocery: 1.5,
        cashbackGas: 0,
        score: 1,


      },
      {
        name: "Venture Rewards",
        src: "../assets/pictures/venturerewards.png",
        info: "Earn unlimited 2X miles per dollar on every purchase, every day. Earn 50,000 bonus miles once you spend $3,000 on purchases within the first 3 months from account opening. ",
        customerSat: 4.6,
        annualFee: 95,
        APR: 19.74,
        cashbackRestaurant: 0,
        cashbackGrocery: 0,
        cashbackGas: 2,
        score: 2,


      },
      {
        name: "VentureOne Rewards",
        src: "../assets/pictures/ventureonerewards.png",
        info: "Earn unlimited 1.25 miles per dollar on every purchase, every day. Earn 20,000 bonus miles once you spend $1,000 on purchases within the first 3 months from account opening. ",
        customerSat: 4.5,
        annualFee: 0,
        APR: 18.74,
        cashbackRestaurant: 0,
        cashbackGrocery: 0,
        cashbackGas: 1.5,
        score: 2,


      },
      {
        name: "Spark Cash",
        src: "../assets/pictures/sparkcash.png",
        info: "Unlimited 2% cash back on every purchase, every day. Earn a one-time $500 cash bonus once you spend $4,500 on purchases within the first 3 months from account opening. ",
        customerSat: 4.5,
        annualFee: 95,
        APR: 18.74,
        cashbackRestaurant: 2,
        cashbackGrocery: 2,
        cashbackGas: 0,
        score: 2,


      },
      {
        name: "Amex Platinum Card",
        src: "../assets/pictures/platinum-card.png",
        info: "Earn 50,000 Membership Reward points after you spend $10,000 and an extra 25,000 points after you spend an additional $10,000 all on qualifying purchases on the Business Platinum Card, within your first 3 months of Card Membership.†",
        customerSat: 4.2,
        annualFee: 500,
        APR: 30,
        cashbackGas: 3,
        cashbackGrocery: 3,
        cashbackRestaurant: 3,
        score: 2
      },
      {
        name: "Spark Cash Select",
        src: "../assets/pictures/sparkcashselect.png",
        info: "Unlimited 1.5% cash back on every purchase, every day. Earn a one-time $200 cash bonus once you spend $3,000 on purchases within the first 3 months from account opening. ",
        customerSat: 4.5,
        annualFee: 0,
        APR: 18.74,
        cashbackRestaurant: 1.5,
        cashbackGrocery: 1.5,
        cashbackGas: 0,
        score: 2,


      },
      {
        name: "Amex Gold Card",
        src: "../assets/pictures/amex_gold.jpeg",
        info: "The American Express® Gold Card is an excellent credit card that stands out among the premium cards on the market. It offers great rewards across useful categories and even features some unique benefits, like a $120 dining credit ($10 monthly) and a $100 airline fee credit. The one area where the card falls flat is in its current sign-up bonus offer. Below, we'll discuss what makes the American Express® Gold Card a great card to apply for and highlight other alternatives to consider. ",
        customerSat: 3.7,
        annualFee: 50,
        APR: 20,
        cashbackGas: 2,
        cashbackGrocery: 2,
        cashbackRestaurant: 2,
        score: 2



      },
      {
        name: "Spark Classic",
        src: "../assets/pictures/sparkclassic.png",
        info: "Get the credit you want for your business, and unlimited 1% cash back on every purchase, every day. ",
        customerSat: 4.4,
        annualFee: 0,
        APR: 24.74,
        cashbackRestaurant: 1,
        cashbackGrocery: 1,
        cashbackGas: 0,
        score: 1,


      },
      {
        name: "Spark Miles",
        src: "../assets/pictures/sparkmiles.png",
        info: "Unlimited 2X miles per dollar on every purchase, every day. Earn a one-time bonus of 50,000 miles – equal to $500 in travel – once you spend $4,500 on purchases within the first 3 months from account opening. ",
        customerSat: 4.5,
        annualFee: 95,
        APR: 18.74,
        cashbackRestaurant: 0,
        cashbackGrocery: 0,
        cashbackGas: 2,
        score: 2,


      },
      {
        name: "Spark Miles Select",
        src: "../assets/pictures/sparkmilesselect.png",
        info: "Unlimited 1.5X miles per dollar on every purchase, every day. Earn a one-time bonus of 20,000 miles – equal to $200 in travel – once you spend $3,000 on purchases within the first 3 months from account opening. ",
        customerSat: 4.3,
        annualFee: 0,
        APR: 18.74,
        cashbackRestaurant: 0,
        cashbackGrocery: 0,
        cashbackGas: 1.5,
        score: 2,


      },


      {
        name: "Amex Green Card",
        src: "../assets/pictures/green-card.png",
        info: "The American Express Green Card provides consumers with some of the worst rewards and features we’ve seen. For reasons which will be made clear in the analysis to follow, we believe the Green Card is not a good fit for most consumers. A high annual fee, compounded with very few benefits and hassles make this card more trouble than it’s worth. Individuals looking for a good American Express charge card can get better value out of cards such as the American Express® Gold Card.",
        customerSat: 4.0,
        annualFee: 0,
        APR: 5,
        cashbackGas: 1,
        cashbackGrocery: 1,
        cashbackRestaurant: 1,
        score: 1
      },
      {
        name: "Capital One Platinum",
        src: "../assets/pictures/platinum.png",
        info: "Get the credit you need with no annual fee. You'll get additional warranty protection at no charge on items that are purchased with your credit card. ",
        customerSat: 4.6,
        annualFee: 0,
        APR: 24.98,
        cashbackRestaurant: 0,
        cashbackGrocery: 0,
        cashbackGas: 0,
        score: 1,





      },
      {
        name: "Journey Student Rewards",
        src: "../assets/pictures/journeystudentrewards.png",
        info: "Earn 1% cash back on all your purchases. Pay on time to boost your cash back to a total of 1.25% for that month. ",
        customerSat: 4.6,
        annualFee: 0,
        APR: 24.98,
        cashbackRestaurant: 1,
        cashbackGrocery: 1,
        cashbackGas: 0,
        score: 1,


      },
      {
        name: "Secured Mastercard",
        src: "../assets/pictures/securedmastercard.png",
        info: "Earn 1% cash back on all your purchases. Pay on time to boost your cash back to a total of 1.25% for that month. ",
        customerSat: 4.4,
        annualFee: 0,
        APR: 24.99,
        cashbackRestaurant: 0,
        cashbackGrocery: 0,
        cashbackGas: 0,
        score: 0,


      },
    ];
    //Deep copy
    this.original = this.credit_card.map(x => Object.assign({}, x));
  }
  name: string;
  animal: string;
  openDialog(): void {
    const dialogRef = this.dialog.open(CourseDialogComponentComponent, {
      data: {
        name: this.highest.name,
        src: this.highest.src,
        highest: this.highScore,
        info: this.highest.info
      }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  sortSat(a: any, b: any) {
    if (a.customerSat > b.customerSat) {
      return -1;
    }
    else if (a.customerSat < b.customerSat) {
      return 1;
    }
    return 0;
  }
  sortAPR(a: any, b: any) {
    if (a.APR > b.APR) {
      return -1;
    }
    else if (a.APR < b.APR) {
      return 1;
    }
    return 0;
  }
  sortAnnual(a: any, b: any) {
    if (a.annualFee < b.annualFee) {
      return -1;
    }
    else if (a.annualFee > b.annualFee) {
      return 1;
    }
    return 0;
  }
  sortSatArray() {
    if (this.checked1) {
      this.credit_card.sort(this.sortSat);
    }

  }
  sortAPRArray() {
    if (this.checked3) {
      this.credit_card.sort(this.sortAPR);
    }

  }
  sortAnnualArray() {
    if (this.checked2) {
      this.credit_card.sort(this.sortAnnual);
    }

  }
  sortLowestCost(a: CreditCard, b: CreditCard) {
    if (a.cashbackRestaurant * .01 * this.restaurant
      + a.cashbackGrocery * 0.01 * this.grocery
      + a.cashbackGas * 0.01 * this.gas < b.cashbackRestaurant * .01 * this.restaurant
      + b.cashbackGrocery * 0.01 * this.grocery
      + b.cashbackGas * 0.01 * this.gas) {
      return -1;
    }
    else if (a.cashbackRestaurant * .01 * this.restaurant
      + a.cashbackGrocery * 0.01 * this.grocery
      + a.cashbackGas * 0.01 * this.gas > b.cashbackRestaurant * .01 * this.restaurant
      + b.cashbackGrocery * 0.01 * this.grocery
      + b.cashbackGas * 0.01 * this.gas) {
      return 1;
    }
    return 0;
  }

  sortCostArray() {
    if (this.monthly_spending == null) {
      return;
    }
    this.highScore = Number.NEGATIVE_INFINITY;
    this.highest = null;

    for (let card of this.credit_card) {
      if (card.cashbackRestaurant * .01 * this.restaurant
        + card.cashbackGrocery * 0.01 * this.grocery
        + card.cashbackGas * 0.01 * this.gas - (card.annualFee / 12) - (this.monthly_spending * (1 - this.percentPaidOff * 0.01) * (card.APR * 0.01) / 12) > this.highScore
        && card.score <= +this.option) {

        this.highScore = card.cashbackRestaurant * .01 * this.restaurant
          + card.cashbackGrocery * 0.01 * this.grocery
          + card.cashbackGas * 0.01 * this.gas - (card.annualFee / 12) - (this.monthly_spending * (1 - this.percentPaidOff * 0.01) * (card.APR * 0.01) / 12);
        this.highest = card;
      }
    }
    // console.log(this.comparatorCost(this.credit_card, this.restaurant
    //   , this.grocery, this.gas, this.monthly_spending, this.percentPaidOff))
    //   console.log("finsihed")
    this.openDialog();
  }
  comparatorCost(array, restaurant, grocery, gas, monthly_spending, percentPaidOff) {
    return array.sort(function (a, b) {
      if (a.cashbackRestaurant * .01 * restaurant
        + a.cashbackGrocery * 0.01 * grocery
        + a.cashbackGas * 0.01 * gas - (a.annualFee / 12) - (monthly_spending * (1 - percentPaidOff * 0.01) * (a.APR * 0.01) / 12)
        - b.cashbackRestaurant * .01 * restaurant
        + b.cashbackGrocery * 0.01 * grocery
        + b.cashbackGas * 0.01 * gas - (b.annualFee / 12) - (monthly_spending * (1 - percentPaidOff * 0.01) * (b.APR * 0.01) / 12) > 0){
          return 1;
        }
        else if (a.cashbackRestaurant * .01 * restaurant
          + a.cashbackGrocery * 0.01 * grocery
          + a.cashbackGas * 0.01 * gas - (a.annualFee / 12) - (monthly_spending * (1 - percentPaidOff * 0.01) * (a.APR * 0.01) / 12)
          - b.cashbackRestaurant * .01 * restaurant
          + b.cashbackGrocery * 0.01 * grocery
          + b.cashbackGas * 0.01 * gas - (b.annualFee / 12) - (monthly_spending * (1 - percentPaidOff * 0.01) * (b.APR * 0.01) / 12) < 0) {
            return -1;
          }
          return 0;
      }) 
    }
  
  sortScore(a, b) {
    if (a.score < b.score) {
      return 1;
    }
    else if (a.score > b.score) {
      return -1;
    }
    return 0;
  }
  sortByCredit() {
    this.credit_card.sort(this.sortScore);
  }
  onNavigate() {
    window.open("https://www.capitalone.com/", "_blank");
  }
  navigateHome() {
    this.homepage = true;
    this.socialpage = false;
    this.securitypage = false;
    this.historypage = false;
  }
  navigateHistory() {
    this.homepage = false;
    this.socialpage = false;
    this.securitypage = false;
    this.historypage = true;
  }
  navigateSocial() {
    this.homepage = false;
    this.socialpage = true;
    this.securitypage = false;
    this.historypage = false;
  }
  navigateSecurity() {
    this.homepage = false;
    this.socialpage = false;
    this.securitypage = true;
    this.historypage = false;
  }



}


