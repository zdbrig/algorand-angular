import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bacem';
  algosigned = "--";
  algoConnected = "--";

  checkAlgo = () => {
    // @ts-ignore
    if (typeof AlgoSigner !== 'undefined') {
      this.algosigned = 'AlgoSigner is installed.';
    } else {
      this.algosigned = 'AlgoSigner is NOT installed.';
    }

  }

  connectAlgo = () => {
    // @ts-ignore
    AlgoSigner.connect()
      .then((d) => {
        this.algoConnected = JSON.stringify(d, null, 2);
        // @ts-ignore
        AlgoSigner.accounts({
          ledger: 'MainNet'
        })
          .then((d) => {
            this.algoConnected = JSON.stringify(d, null, 2);
          })

      })
      .catch((e) => {
        this.algoConnected = JSON.stringify(e, null, 2);
      });

  }
}
