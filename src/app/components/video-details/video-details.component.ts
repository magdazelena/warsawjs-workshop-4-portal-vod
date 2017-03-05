import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../../services/video.service';
import {Video} from '../../models/video';
import {Observable } from 'rxjs';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css'],
  providers: [VideoService]
})
export class VideoDetailsComponent implements OnInit {

  private video: Video

  constructor(private videoService: VideoService, private activatedRoute: ActivatedRoute) { }

   ngOnInit() {

    this.activatedRoute.params
        .map((params:any) => params.videoId)
        .switchMap(id=> this.videoService.get(id))
        .subscribe(video => {
	  		this.video = video;
	  	});
  }

}
