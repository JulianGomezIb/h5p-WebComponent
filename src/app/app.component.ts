import { Component, OnInit } from '@angular/core';
import { IContentMetadata, IEditorModel, IPlayerModel } from '@lumieducation/h5p-server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'h5p';

  ngOnInit() {


    // const h5pEditor: any = document.getElementById('editor');
    // h5pEditor.loadContentCallback = async (contentId: string) =>  Promise <
    //   IEditorModel  /** vea types.ts en h5p-nodejs-library para más detalles **/  &  {
    //     library ?: string ;
    //     metadata?: IContentMetadata;
    //     params?: any;
    // } >

    const h5pEditor: any = document.getElementById('editor');
    h5pEditor.loadContentCallback = async (contentId: string) => {
     
    }
    // const h5pPlayerSave: any = document.getElementById('editor');
    // h5pPlayerSave.saveContentCallback = async (contentId: string, requestBody: any) => { /** save content on server **/ };

  }
}




