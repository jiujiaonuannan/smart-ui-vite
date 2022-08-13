import { createApp } from "vue/dist/vue.esm-browser";
import SmartUI from "./entry";

createApp({
  template: `
			<div>
					<SMButton>普通按钮</SMButton>
			</div>
	`,
})
  .use(SmartUI)
  .mount("#app");
