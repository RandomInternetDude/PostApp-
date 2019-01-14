export class CreatePostModel {
    title: string;
    body: string;
    catagory: string;
    file:any;
    CPform:any;

    setLabels(){
        this.title = "Title";
        this.body = "Post";
        this.catagory="Catagory"
        this.file="Image"
    }
}