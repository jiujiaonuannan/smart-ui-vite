import { createApp } from "vue/dist/vue.esm-browser";
import SmartUI from "./entry";

createApp({
  template: `
		<div>
			<SButton color="blue" plain icon="search"></SButton>
			<SButton color="green" round plain icon="edit" ></SButton>
			<SButton color="gray" round plain icon="check" ></SButton>
			<SButton color="yellow" round plain icon="message" ></SButton>
			<SButton color="red" round plain icon="delete" ></SButton>
		</div>
	`,
})
  .use(SmartUI)
  .mount("#app");
