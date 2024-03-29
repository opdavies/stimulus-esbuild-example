import { Application } from "@hotwired/stimulus";
import { definitions } from "stimulus:./controllers";

const app = Application.start();
app.load(definitions);
