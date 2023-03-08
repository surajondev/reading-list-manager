import { Button } from "@chakra-ui/react";
import styles from "../styles/DailyDev.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAddress } from "@thirdweb-dev/react";
import { ArticleContainer } from "./ArticleContainer";
import { InputContainer } from "./mini-compnents/InputContainer";
import Toastify from "./mini-compnents/Toastify";

const DevCommunity = () => {
  const BACKEND = process.env.NEXT_PUBLIC_BACKEND;
  const [submit, setSubmit] = useState(false);
  const [apiKey, setApiKey] = useState();
  const [data, setData] = useState();
  const address = useAddress();
  const [error, setError] = useState();
  const [nestData, setNestData] = useState([]);

  useEffect(() => {
    if (address) {
      axios
        .post(`${BACKEND}/dbFind`, {
          public_key: address,
          src: "dev_to",
        })
        .then(async (response) => {
          if (response.data != "null") {
            setApiKey(response.data);
            if (apiKey != undefined) {
              handleSubmit();
            }
          }
        });
    }
  }, [address, apiKey]);

  const handleSubmit = () => {
    if (address) {
      axios
        .post(`${BACKEND}/db`, {
          public_key: address,
          dev_to: apiKey,
        })
        .then((response) => {
          console.log(response.data);
        });
    }
    const url = `${BACKEND}/devto`;
    axios
      .post(url, {
        api: apiKey,
      })
      .then((response) => {
        if (response.data.error) {
          setError(response.data.error);
          // console.log(response.data.error)
        } else {
          setSubmit(true);
          let newData = response.data;
          newData.map((data, i) => {
            const f = Math.floor(Math.random() * 31);
            if (f == 0) {
              f = f + 1;
            }
            data.imgURL = `/assets/vector${f}.png`;
          });
          setData(newData);
          let demoArr = [];
          for (let i = 0; i <= newData.length / 20; i++) {
            let arrData = [];
            if (i == newData.legth / 20) {
              arrData = newData.slice(i * 20, i * 20 + (newData.legth % 20));
            } else {
              arrData = newData.slice(i * 20, 20 * (i + 1));
            }
            demoArr.push(arrData);
          }
          setNestData(demoArr);
        }
      });
  };

  return (
    <div className={styles.container}>
      {!submit && (
        <div>
          <div className={styles.inputContainer}>
            <InputContainer
              width="60%"
              onChange={(event) => setApiKey(event.target.value)}
              placeholder="Enter API Key"
            />
            <Button
              className={styles.button}
              onClick={handleSubmit}
              colorScheme="pink"
            >
              Search
            </Button>
          </div>
          {error && <Toastify data={error} />}
        </div>
      )}

      {submit && !error && <ArticleContainer nestData={nestData} data={data} />}
    </div>
  );
};

export default DevCommunity;
