import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap'
import './Covid19.css'

import $ from "jquery";
// ID 186 is represent for Vietnam
export function Covid19() {
    $(document).ready(function(){
        init();
        function init(){
            var url = "https://api.covid19api.com/summary";
            $.get(url, function(data){
                data = `
                    <p id="totalConfirmed"> Total Confirmed World: ${data.Global.TotalConfirmed} </p>
                    <p id="totalDeaths"> Total Deaths World: ${data.Global.TotalDeaths} </p>
                    <p id="totalRecovered"> Total Recovered World: ${data.Global.TotalRecovered} </p>
                    <p id="totalConfirmedVietnam"> Total Confirmed Vietnam: ${data.Countries[186].TotalConfirmed} </p>
                    <p id="totalDeathsVietnam"> Total Deaths Vietnam: ${data.Countries[186].TotalDeaths} </p>
                    <p id="totalRecoveredVietnam"> Total Recovered Vietnam: ${data.Countries[186].TotalRecovered} </p>
                `;
                $("#data").html(data);
            })           
        }
    })
    function refreshData(){
        // document.getElementById("Covid19_refresh").innerHTML = "Loading...";
        $("#data").empty();
        init();
        function init(){
            var url = "https://api.covid19api.com/summary";
            $.get(url, function(data){
                data = `
                    <p id="totalConfirmed"> Total Confirmed World: ${data.Global.TotalConfirmed} </p>
                    <p id="totalDeaths"> Total Deaths World: ${data.Global.TotalDeaths} </p>
                    <p id="totalRecovered"> Total Recovered World: ${data.Global.TotalRecovered} </p>
                    <p id="totalConfirmedVietnam"> Total Confirmed Vietnam: ${data.Countries[186].TotalConfirmed} </p>
                    <p id="totalDeathsVietnam"> Total Deaths Vietnam: ${data.Countries[186].TotalDeaths} </p>
                    <p id="totalRecoveredVietnam"> Total Recovered Vietnam: ${data.Countries[186].TotalRecovered} </p>
                `;
                $("#data").html(data);
            });
        };
        // setTimeout(poilk(),2000);
    }
    // function poilk(){
    //     document.getElementById("Covid19_refresh").innerHTML = "REFRESH DATA";
    // }

    return (
        <div className="Covid19">
            <Container>
                <Row>
                    <Col xs="12" sm="12" md="7" lg="7">
                        <div id="data"></div> 
                        <br></br>
                        <Button color="info" onClick={() => refreshData()} id="Covid19_refresh"> REFRESH DATA <br></br> (Wait for a while) </Button>
                        <br></br>
                        <br></br>
                        <p>(Data:  
                            <a href="https://api.covid19api.com/summary" target="_blank" rel="noreferrer">
                                https://api.covid19api.com/summary
                            </a>)
                        </p>
                        <img src="https://osha.europa.eu/sites/default/files/corona_info_0.png" alt="covid tips" width="80%"></img>
                        <br></br>
                        <hr></hr>
                    </Col>
                    <Col xs="12" sm="12" md="5" lg="5">
                        <div className="Covid19__concept">
                            <b>Coronavirus disease (COVID-19) </b> is an infectious disease caused by a newly discovered coronavirus.
                            <br></br> <br></br>
                            Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.
                            <br></br> <br></br>
                            The best way to prevent and slow down transmission is to be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol-based rub frequently and not touching your face. 
                            <br></br> <br></br>
                            The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).
                            <br></br> <br></br>
                            <b>What to do to keep yourself and others safe from COVID-19?</b>
                            <br></br> <br></br>
                            <ul>
                                <li>Make wearing a mask a normal part of being around other people. The appropriate use, storage and cleaning or disposal are essential to make masks as effective as possible.</li>
                                <li>Avoid the 3Cs: spaces that are <i>closed, crowded or involve close contact</i>.</li>
                                <li>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water; Avoid touching your eyes, nose and mouth;
                                Cover your mouth and nose with your bent elbow or tissue when you cough or sneeze; Clean and disinfect surfaces frequently especially those which are regularly touched.
                                </li>
                                <li>If you feel unwell: Stay home and self-isolate even if you have minor symptoms such as cough, headache, mild fever; If you have a fever, cough and difficulty breathing, seek medical attention immediately. Call by telephone first, if you can and follow the directions of your local health authority;
                                Keep up to date on the latest information from trusted sources, such as WHO or your local and national health authorities.
                                </li>
                                <li><i>#HealthyAtHome</i>: Staying physically active, Healthy diet, Healthy parenting, Quitting tobacco, Mental health</li>
                                <li>...</li>
                            </ul>
                            <br></br> <br></br>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
} 