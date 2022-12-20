import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import { DragDrop } from "../DragDrop/DragDrop";
import { columns } from "./ConstData";

import "./Main.css";
import { style } from './ConstData';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export function Main() {
    const [value, setValue] = useState(0);
    const [rows, setRows] = useState([]);
    const [related, setRelated] = useState([]);
    const [ques, setQues] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        axios.get("data.json")
            .then((response) => {
                setRows(response.data.raw_broadmatch_data);
            });
    }, []);

    useEffect(() => {
        axios.get("data.json")
            .then((response) => {
                setRelated(response.data.raw_related_data);
            });
    }, []);

    useEffect(() => {
        axios.get("data.json")
            .then((response) => {
                setQues(response.data.raw_question_data);
            });
    }, []);

    return (
        <main className="main">
            <header className="header">
                <span className="main_heading">
                    Keyword Explorer &gt; <b>Keyword Overview</b>
                </span>
                <h2 className="main_heading">
                    Keyword : <span className="shopping">shopping in barcelona</span>
                </h2>
                <span className="country_span">
                    Database : United States{" "}
                    <img
                        className="flag"
                        src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                        alt="USA Flag"
                    />
                </span>
            </header>
            <section className="section">
                <div className="cards">
                    <div className="left_card">
                        <div className="top">
                            <h4 className="head">Volume</h4>
                            <span>
                                <span className="number">480</span>
                                <img
                                    className="flag"
                                    src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                                    alt="USA Flag"
                                />
                            </span>
                        </div>
                        <div className="bottom">
                            <h4 className="head">Keyword Difficulty</h4>
                            <span className="number">46 %</span>
                            <span className="possible">Possible</span>
                            <p className="paragraph">
                                Slightly more competition. You will need well-structured and
                                unique content appropriately optimized for your keywords.
                            </p>
                        </div>
                    </div>
                    <div className="right_cards">
                        <div className="first_card">
                            <h5 className="right_card_head">Intent</h5>
                            <span className="commercial">Commercial</span>
                        </div>
                        <div className="second_card">
                            <h5 className="head">Results</h5>
                            <span className="number">313M</span>
                        </div>
                        <div className="third_card">
                            <div className="cpc_div">
                                <h5 className="head">CPC</h5>
                                <span className="number">$0.12</span>
                            </div>
                            <div>
                                <h5 className="head">Com.</h5>
                                <span className="number">0.24</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Box sx={{ width: "100%" }}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                        >
                            <Tab label="Broad Match" {...a11yProps(0)} />
                            <Tab label="Related" {...a11yProps(1)} />
                            <Tab label="Questions" {...a11yProps(2)} />
                            <div>
                                <Button onClick={handleOpen} className="add_to_list_btn">
                                    Add to List
                                </Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography
                                            id="modal-modal-title"
                                            variant="h6"
                                            component="h2"
                                        >
                                            Drag & Drop
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            <DragDrop />
                                        </Typography>
                                    </Box>
                                </Modal>
                            </div>
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <div style={{ height: 800, width: "100%" }}>
                            <DataGrid
                                getRowId={(item) => item[0]}
                                rows={rows}
                                columns={columns}
                                checkboxSelection
                            />
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div style={{ height: 400, width: "100%" }}>
                            <DataGrid
                                getRowId={(item) => item[0]}
                                rows={related}
                                columns={columns}
                                checkboxSelection
                            />
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div style={{ height: 400, width: "100%" }}>
                            <DataGrid
                                getRowId={(item) => item[0]}
                                rows={ques}
                                columns={columns}
                                checkboxSelection
                            />
                        </div>
                    </TabPanel>
                </Box>
            </section>
        </main>
    );
};