import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPen, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ServiceProfile } from '@profiles/service-profiles/service-profile.model';


@Component({
  selector: 'app-service-profile-item',
  templateUrl: './service-profile-item.component.html',
  styleUrls: ['./service-profile-item.component.scss']
})
export class ServiceProfileItemComponent implements OnInit {
  @Input() serviceProfile: ServiceProfile;
  serviceId: number;
  faPen = faPen;
  faTimesCircle = faTimesCircle;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onEditServiceProfile() {
    this.router.navigate([this.serviceProfile.id, 'edit-service-profile'], { relativeTo: this.route });
  }

  onDeleteServiceProfile() {
    this.router.navigate(['/profiles']);
  }

}
