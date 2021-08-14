import EmailEdit from "../components/Emailedit/emailEdit.component";

const LandingPage = () => (
    <div>
    
    
 <EmailEdit
        ref={editor => this.editor = editor}
      />
    </div>
);

export default LandingPage;