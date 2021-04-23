// pages/index.js

import Head from "next/head"
import {useEffect, useState} from "react";
import { io } from "socket.io-client"
import UsernameField from "../components/UsernameField"

export default function Home () {
  //save the socket
  const [socket, setSocket] = useState(null)
}