"use strict";

const $ = function(id) {
    return document.getElementById(id);
};

const getQueryStringParamValue = (paramKey) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const paramValue = urlParams.get(paramKey);
    console.log('paramKey/value ' + paramKey + ':' + paramValue);
    return paramValue;
};

const confirmData = function() {
    $("confirm_form").submit();
};

window.onload = function() {
    $("firstName").innerHTML = 'First Name: ' + getQueryStringParamValue("first_name");
    $("emailAddress").innerHTML = 'Email Address: ' + getQueryStringParamValue("email_address1");
    $("confirmBtn").onclick = confirmData;
};
