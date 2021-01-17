import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PDFProgressData, PdfViewerComponent, PDFDocumentProxy, PDFSource } from 'ng2-pdf-viewer';
import { UowService } from 'src/app/services/uow.service';
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  id = 0;
  file = '';
  link = '';
  folder = 'cours';
  //
  // pdfSrc: string | PDFSource | ArrayBuffer = '../assets/pdftron-sdk.pdf';
  // pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  pdfSrc: PDFSource;
  error: any;
  page = 1;
  rotation = 0;
  zoom = 1.0;
  originalSize = true;
  pdf: any;
  renderText = true;
  progressData: PDFProgressData;
  isLoaded = false;
  stickToPage = false;
  showAll = true;
  autoresize = true;
  fitToPage = false;
  outline: any[];
  isOutlineShown = false;
  pdfQuery = '';

  @ViewChild(PdfViewerComponent) private pdfComponent: PdfViewerComponent;

  constructor(private route: ActivatedRoute, @Inject('BASE_URL') public url: string
  , private uow: UowService) { this.init()}

  ngOnInit() {


    // console.log(this.pdfSrc)

    // this.downloadFile(`./${this.folder}/${this.id}/${this.file}`);
  }

  init() {
    this.file = this.route.snapshot.paramMap.get('file') as string;
    // this.id = +localStorage.getItem('idCours');
    this.id = +this.route.snapshot.paramMap.get('id').split('_').reduceRight(e => e);
    this.link = `${this.url}/${this.folder}/${this.id}/${this.file}`;
    this.pdfSrc = {
      url: this.link,
      withCredentials: true
    };
  }

  private downloadFile(url: string): any {
    return this.uow.files.download(url).subscribe(r => {
      console.log(r);
      this.pdfSrc = r as any;
    });
  }



  openLocalFile() {
    // jQuery('#file').trigger('click');

    console.log('click')
  }

  toggleOutline() {
    this.isOutlineShown = !this.isOutlineShown;
  }

  incrementPage(amount: number) {
    this.page += amount;
  }

  incrementZoom(amount: number) {
    this.zoom += amount;
  }

  rotate(angle: number) {
    this.rotation += angle;
  }

  /**
   * Render PDF preview on selecting file
   */
  onFileSelected() {
    const $pdf: any = document.querySelector('#file');

    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer($pdf.files[0]);
    }
  }

  /**
   * Get pdf information after it's loaded
   * @param pdf
   */
  afterLoadComplete(pdf: PDFDocumentProxy) {
    this.pdf = pdf;
    this.isLoaded = true;

    this.loadOutline();
  }

  /**
   * Get outline
   */
  loadOutline() {
    this.pdf.getOutline().then((outline: any[]) => {
      this.outline = outline;
    });
  }

  /**
   * Handle error callback
   *
   * @param error
   */
  onError(error: any) {
    this.error = error; // set error

    console.warn(error)

    if (error.name === 'PasswordException') {
      const password = prompt(
        'This document is password protected. Enter the password:'
      );

      if (password) {
        this.error = null;
        this.setPassword(password);
      }
    }
  }

  setPassword(password: string) {
    // let newSrc;
    // if (this.pdfSrc instanceof ArrayBuffer) {
    //   newSrc = { data: this.pdfSrc };
    // } else if (typeof this.pdfSrc === 'string') {
    //   newSrc = { url: this.pdfSrc };
    // } else {
    //   newSrc = { ...this.pdfSrc };
    // }
    // newSrc.password = password;
    // this.pdfSrc = newSrc;
  }

  /**
   * Pdf loading progress callback
   * @param {PDFProgressData} progressData
   */
  onProgress(progressData: PDFProgressData) {
    console.log(progressData);
    this.progressData = progressData;
    this.isLoaded = false;
    this.error = null; // clear error
  }

  getInt(value: number): number {
    return Math.round(value);
  }

  /**
   * Navigate to destination
   * @param destination
   */
  navigateTo(destination: any) {
    this.pdfComponent.pdfLinkService.navigateTo(destination);
  }

  /**
   * Scroll view
   */
  scrollToPage() {
    this.pdfComponent.pdfViewer.scrollPageIntoView({
      pageNumber: 3,
    });
  }

  /**
   * Page rendered callback, which is called when a page is rendered (called multiple times)
   *
   * @param {CustomEvent} e
   */
  pageRendered(e: CustomEvent) {
    console.log('(page-rendered)', e);
  }

  searchQueryChanged(newQuery: string) {
    if (newQuery !== this.pdfQuery) {
      this.pdfQuery = newQuery;
      this.pdfComponent.pdfFindController.executeCommand('find', {
        query: this.pdfQuery,
        highlightAll: true,
      });
    } else {
      this.pdfComponent.pdfFindController.executeCommand('findagain', {
        query: this.pdfQuery,
        highlightAll: true,
      });
    }
  }

}
