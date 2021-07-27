import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ivr',
  templateUrl: './ivr.component.html',
  styleUrls: ['./ivr.component.css']
})
export class IvrComponent implements OnInit {

  links =[
          'dynamic-messaging',
          'dnis',
          'exit-to-map',
          'flags-admin',
          'get-campaign',
          'ivr-exit-rules',
          'bridge',
          'message-admin',
          'office-locator',
          'pay-per-view',
          'tech-admin'
        ];
  titles =['Dynamic Messaging',
            'DNIS',
            'ExitToMap',
            'FlagsAdmin',
            'GetCampaign',
            'IvrExitRules',
            'Bridge',
            'MessageAdmin',
            'OfficeLocator',
            'PayPerView',
            'TechAdmin'
          ];
          activeLink = this.links[0];
          

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  


}
