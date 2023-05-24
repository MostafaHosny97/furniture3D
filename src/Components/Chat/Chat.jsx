import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#fff",
  fontFamily: 'Helvetica Neue',
  headerBgColor: "#EF6C00",
  headerFontColor: "#fff",
  headerFontSize: "30px",
  botBubbleColor: "#EF6C00",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#EF6C00",
};

const steps = [
  {
    id: "BOT/intro",
    message: "Hello, Welcome to Furniture Store",
    trigger: "CHOICES/intro",
  },
  {
    id: "CHOICES/intro",
    options: [
    {label: "Good Morning", trigger: "BOT/pleasantry" },
    {label: "Good Evening", trigger: "BOT/pleasantry"}],
  },
  {
    id: "BOT/pleasantry",
    message: "Lovely to Meet You!",
    trigger: "BOT/introduce-self",
  },
  {
    id: "BOT/introduce-self",
    message: "I'm a Simple ChatBot To Help You.",
    trigger: "BOT/ask-question",
  },

  {
    id: "BOT/ask-question",
    message: "Please Enter Your Name!",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "Hi {previousValue}",
    trigger: "4",
  },
  {
    id: "4",
    message: "Please Tell Me What You Want from this Store",
    trigger: "choose",
  },
  {
    id: "choose",
    options: [
      {
        value: "Wooden Table",
        label: "Wooden Table",
        trigger: "Wooden Table",
      },
      {
        value: "Basket Swing Chair",
        label: "Basket Swing Chair",
        trigger: "Basket Swing Chair",
      },
      { value: "Recliner",
        label: "Recliner",
        trigger: "Recliner" },
    ],
  },
  {
    id: "Wooden Table",
    message:
      "Thank you for choosing our products, an article of furniture consisting of a flat, slab like top supported on one or more legs or other supports and used for serving food to those seated at it, You can see it by clicking on the Details",
      end: true,
    },
  {
    id: "Basket Swing Chair",
    message:
      "Thank you for choosing our products, Indoor Outdoor Swing Chair Without Stand, All Weather Foldable Hammock, You can see it by clicking on the Details",
    end: true,
  },
  {
    id: "Recliner",
    message:
      "Thank you for choosing our products, an armchair or sofa that reclines when the occupant lowers the chair's back and raises its front, You can see it by clicking on the Details",
    end: true,
  },
  
];

const Chat = () => (
  <ThemeProvider theme={theme} >
    <ChatBot steps={steps} headerTitle="Store Chat" width="350px" floating='true' placeholder='Write the Message ...'  />
  </ThemeProvider>
);

export default Chat;
