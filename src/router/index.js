import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignInView from "../views/SignInView.vue";
import WelcomeView from "../views/WelcomeView.vue";
import ServicesComponent from "../components/ServicesComponent.vue";
import AppointmentsComponent from "../components/AppointmentsComponent.vue";
import NotificationsComponent from "../components/NotificationsComponent.vue";
import NailCare from "../components/NailCare.vue";
import MilkySoak from "../components/MilkySoak.vue";
import PeppermintScrub from "../components/PeppermintScrub.vue";
import MoisturizingMask from "../components/MoisturizingMask.vue";
import OrientalFootTherapy from "../components/OrientalFootTherapy.vue";
import ThaiFootMassage from "../components/ThaiFootMassage.vue";
import SwedishFootMassage from "../components/SwedishFootMassage.vue";
import DeepTissueMassage from "../components/DeepTissueMassage.vue";
import SetAppointmentDate from "../components/SetAppointmentDate.vue";
import SetTime from "../components/SetTime.vue";
import SelectPayment from "../components/SelectPayment.vue";
import CardDetails from "../components/CardDetails.vue";
import Success from "../components/Success.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/signin",
      name: "signin",
      component: SignInView,
    },
    {
      path: "/welcome",
      name: "welcome",
      component: WelcomeView,
    },
    {
      path: "/services",
      name: "services",
      component: ServicesComponent,
    },
    {
      path: "/appointments",
      name: "appointments",
      component: AppointmentsComponent,
    },
    {
      path: "/notifications",
      name: "notifications",
      component: NotificationsComponent,
    },
    {
      path: "/nailcare",
      name: "nailcare",
      component: NailCare,
    },
    {
      path: "/milkysoak",
      name: "milkysoak",
      component: MilkySoak,
    },
    {
      path: "/peppermintscrub",
      name: "peppermintscrub",
      component: PeppermintScrub,
    },
    {
      path: "/moisturizing",
      name: "moisturizing",
      component: MoisturizingMask,
    },
    {
      path: "/oriental",
      name: "oriental",
      component: OrientalFootTherapy,
    },
    {
      path: "/thaimassage",
      name: "thaimassage",
      component: ThaiFootMassage,
    },
    {
      path: "/swedishmassage",
      name: "swedishmassage",
      component: SwedishFootMassage,
    },
    {
      path: "/deepmassage",
      name: "deepmassage",
      component: DeepTissueMassage,
    },
    {
      path: "/setdate",
      name: "setdate",
      component: SetAppointmentDate,
    },
    {
      path: "/settime",
      name: "settime",
      component: SetTime,
    },
    {
      path: "/selectpayment",
      name: "selectpayment",
      component: SelectPayment,
    },
    {
      path: "/carddetails",
      name: "carddetails",
      component: CardDetails,
    },
    {
      path: "/success",
      name: "success",
      component: Success,
    },
  ],
});

export default router;
