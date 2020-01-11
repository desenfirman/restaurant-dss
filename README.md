# Restaurant Finder w/ Analytical Hierarchy Process DSS

A restaurant finder app using AHP-DSS. Final project for Decision Support System course - Faculty of Computer Science, Universitas Brawijaya.

## Repository structure

```text
restaurant-dss/
    css/
        bootstrap.min.css       # bootstrap theming

    experiment/
        data ta3.xlsx           # spreadsheet version of algorithm

    js/
        bootstrap.min.js
        database_export.js      # dataset used
        jquery-3.2.1.min.js     # jquery
        popper.min.js           # popper for bootstrap
        script.js               # main AHP script

    index.html                  # main index app
    README.md                   # this file
    star.png                    # just favicon
```

## Data

This final project using data from restaurant around Malang City. We grab some information about restaurant rating and distance from Google Maps. The distance that used in this project are distance from restaurant to Universitas Brawijaya. Meanwhile, the price data information are grabbed from Go-Jek. We use average price of food in restaturant as main price. The data is taken from November to December 2017.

## Demo

On the left side, user can see the restaurant dataset that we use in this app.

![Check dataset](https://i.imgur.com/TSVAvbR.gif)

On the right side, user should input some criteria before system giving reccomendations. The criteria value are represented as slider which a signification weight between another criteria. Click submit to see the restaurant recommendation.

![Input criteria weight](https://i.imgur.com/Q4Zruin.gif)

## Final report

You can check this [link](https://docs.google.com/document/d/1WkpVcLRIsDU5ti1_LYPki-uOrPA92hHO-Iox28ZZggE/edit?usp=sharing) for report (Bahasa Indonesia)

## By

```text
1. Ageng Wibowo
2. Albert Bill Alroy
3. Aldous Elpizochari
4. Dese N. Firmansyah
5. I Made Jeri Permana
6. Ricky Marten S. T.
```
