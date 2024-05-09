import { h } from "vue";
import type { IconSet, IconProps } from "vuetify";
import javaScriptLogo from "./svg/javaScriptLogo.vue";
import graphQLLogo from "./svg/graphQLLogo.vue";
import mongoLogo from "./svg/mongoLogo.vue";
import nextjsLogo from "./svg/nextjsLogo.vue";
import postgresqlLogo from "./svg/postgresqlLogo.vue";
import nodeLogo from "./svg/nodeLogo.vue";
import reactLogo from "./svg/reactLogo.vue";
import vueLogo from "./svg/vueLogo.vue";
import linkedInLogo from "./svg/linkedInLogo.vue";
import htmlLogo from "./svg/htmlLogo.vue";
import cssLogo from "./svg/cssLogo.vue";
import gitLogo from "./svg/gitLogo.vue";
import emailLogo from "./svg/emailLogo.vue";
import contactIcon from "./svg/contactLogo.vue";
import linkIcon from "./svg/linkIcon.vue";
import accountIcon from './svg/accountIcon.vue';

const customSvgNameToComponent: any = {
  "html-logo": htmlLogo,
  "css-logo": cssLogo,
  "vue-logo": vueLogo,
  "react-logo": reactLogo,
  "node-logo": nodeLogo,
  "postgresql-logo": postgresqlLogo,
  "nextjs-logo": nextjsLogo,
  "mongo-logo": mongoLogo,
  "graphql-logo": graphQLLogo,
  "javascript-logo": javaScriptLogo,
  "linkedin-logo": linkedInLogo,
  "git-logo": gitLogo,
  "email-logo": emailLogo,
  "contact-icon": contactIcon,
  "link-icon": linkIcon,
  "account-icon": accountIcon,
};
const icons: IconSet = {
  component: (props: IconProps) =>
    h(customSvgNameToComponent[props.icon as any]),
};

export { icons };
