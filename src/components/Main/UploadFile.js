import React, { useState, useContext, useEffect } from "react";
import styles from "./UploadFile.module.css";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import cloudUpload from "../../assets/cloudUpload.png";
import { contextData } from "../../ContextWrapper";
import { useNavigate } from "react-router-dom";

export default function UploadFile() {
  const navigate = useNavigate();
  // const [view, setView] = useState(true);
  const [spin, setSpin] = useState(false);
  const [dragActive, setDragActive] = React.useState(false);

  // const [demo, setDemo] = useState();
  const [medication, setMedication] = useState();
  const [social, setSocial] = useState();
  const [personal, setPersonal] = useState();
  const [vital, setVital] = useState();
  const [lab, setLab] = useState();
  // const [upload, setUpload] = useState();
  const [status, setStatus] = useState("loading....");
  const [pdfFile, setPdfFile] = useState();

  var formdata = new FormData();
  const changeHandler = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // setUpload(e.target.files[0]);
      clickHandler(e.target.files[0]);
      // setView(false);
      let s = e.target.files[0];
      if (s) {
        let reader = new FileReader();
        reader.readAsDataURL(s);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
        };
      }
    }
  };
  const next_page = [];
  useEffect(() => {
    // console.log("medication insise eff", medication);
    // console.log("social insise eff", social);
    // console.log("personal insise eff", personal);
    if (medication && social && personal) {
      // console.log("in load", medication, social, personal);
      next_page.push(personal);
      next_page.push(social);
      next_page.push(medication);
      next_page.push(vital);
      next_page.push(lab);
      console.log(next_page);
      navigate("/dashboard", { state: { pdf: pdfFile, response: next_page } });
    }
  }, [medication, social, personal]);

  const clickHandler = (upload) => {
    formdata.append("file", upload);
    var pas = upload;
    console.log("formData insise", formdata.get("file"));
    setSpin(true);
    // setView(true);
    console.log("in send", upload);
    var OCR_ENDPOINT = "http://localhost:4500/";
    var DEMO_ENDPOINT = "http://localhost:5225/";
    var LAB_ENDPOINT = "http://localhost:5225/";
    var VITAL_ENDPOINT = "http://localhost:5225/";
    var SOCIAL_ENDPOINT = "http://localhost:6500/";
    var MEDICATION_ENDPOINT = "http://localhost:6500/";
    setStatus("Ocr loading .....");
    fetch(OCR_ENDPOINT + "ocr", {
      method: "POST",
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("in ocr res", data);

        setStatus("Social loading .....");
        fetch(SOCIAL_ENDPOINT + "social", {
          method: "POST",
          body: JSON.stringify({ text: data["ocr_op"]["page_12"] }),
        })
          .then((response) => response.json())
          .then((data) => {
            setSocial(data);
            console.log("in res2", data);

            // navigate("/dashboard", { state: pdfFile });
          })
          .catch((error) => {
            console.log(error);
            setSpin(false);
          });

        setStatus("Demographic loading .....");
        fetch(DEMO_ENDPOINT + "demo", {
          method: "POST",
          body: JSON.stringify({ text: data["ocr_op"]["page_1"] }),
        })
          .then((response) => response.json())
          .then((data) => {
            setPersonal(data);
            console.log("in res2", data);

            // navigate("/dashboard", { state: pdfFile });
          })
          .catch((error) => {
            console.log(error);
            setSpin(false);
          });
        setStatus("vitals loading .....");
        fetch(VITAL_ENDPOINT + "vitals", {
          method: "POST",
          body: JSON.stringify({ text: data["ocr_op"]["page_13"] }),
        })
          .then((response) => response.json())
          .then((data) => {
            setVital(data);
            console.log("in res2", data);
            setSpin(false);
          })
          .catch((error) => {
            console.log(error);
            setSpin(false);
          });
        setStatus("lab_reports loading .....");
        fetch(LAB_ENDPOINT + "lab", {
          method: "POST",
          body: JSON.stringify({ text: data["ocr_op"]["page_14"] }),
        })
          .then((response) => response.json())
          .then((data) => {
            setLab(data);
            console.log("in res2", data);
            setSpin(false);
          })
          .catch((error) => {
            console.log(error);
            setSpin(false);
          });

        setStatus("Medication loading .....");
        fetch(MEDICATION_ENDPOINT + "med7", {
          method: "POST",
          body: JSON.stringify(data["ocr_op"]),
        })
          .then((response) => response.json())
          .then((data) => {
            setMedication(data);
            console.log("in res2", data);
            console.log(next_page);

            setSpin(false);
          })
          .catch((error) => {
            console.log(error);
            setSpin(false);
          });
      })
      .catch((error) => {
        console.log(error);
        setSpin(false);
      });
    // console.log(next_page);
    // navigate("/dashboard", { state: pdfFile });
  };

  // To Handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      clickHandler(e.dataTransfer.files[0]);
    }
  };

  return (
    <>
      <div className={styles.heroImage}>
        <div className={styles.heroText}></div>
        <div className={styles.cardConatiner}>
          <div className="row">
            <div className="col-lg-9 col-sm-12 col-12">
              <div className="row">
                <div className={`d-flex justify-content-center flex-column`}>
                  <div className={`${styles.cardHeader} position-relative`}>
                    <h1>Extracting Data Made Easy...</h1>
                    <p>
                      Extract, Categorize and Review your reports in a minutes.
                    </p>
                    {/* <Form.Group className="mb-3">
                      <Form.Label>Upload File</Form.Label>
                      <Form.Control
                        type="file"
                        size="lg"
                        onChange={changeHandler}
                      />
                    </Form.Group> */}
                    <form
                      className={`${styles.form_file_upload} mb-3`}
                      onDragEnter={handleDrag}
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <input
                        style={{ display: "none" }}
                        type="file"
                        id="input-file-upload"
                        multiple={true}
                        onChange={changeHandler}
                      />
                      <label
                        id="label-file-upload"
                        htmlFor="input-file-upload"
                        className={
                          dragActive
                            ? `${styles.label_file_upload} ${styles.drag_active}`
                            : `${styles.label_file_upload}`
                        }
                      >
                        <div>
                          <img
                            src={cloudUpload}
                            style={{ width: "96px", height: "96px" }}
                          />
                          <p>
                            <span>Drag and Drop or </span>
                            <a className={`${styles.upload_button}`}>Browse</a>
                            <span> to Upload</span>
                          </p>
                        </div>
                      </label>
                      {dragActive && (
                        <div
                          id="drag-file-element"
                          className={`${styles.drag_file_element}`}
                          onDragEnter={handleDrag}
                          onDragLeave={handleDrag}
                          onDragOver={handleDrag}
                          onDrop={handleDrop}
                        ></div>
                      )}
                    </form>
                    <div className={`${styles.spin}`}>
                      {spin && (
                        <Spinner animation="border" variant="secondary" />
                      )}
                      {spin && <span>{status}</span>}
                    </div>
                  </div>
                  {/* <div className="text-center">
                    <button
                      className={`${styles.choose_file} btn btn-primary`}
                      disabled={view}
                      onClick={clickHandler}
                    >
                      Extract
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// fetch("https://cc88-34-125-74-201.ngrok.io/ocr", {
//   method: "POST",
//   body: formdata,
// })
//   .then((response) => response.json())
//   .then((data) => {
//     setDemo(data["op"]);
//     console.log("in op", demo, upload);
//     navigate("/dashboard", { state: pdfFile });
//     setSpin(false);
//   })
//   .catch((error) => {
//     console.log(error);
//     setSpin(false);
//   });
