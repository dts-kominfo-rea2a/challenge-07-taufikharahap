const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = async (ekspresi) => {
    const dataMarah = [];
    const dataTidakMarah = [];
    const dataTidakAda =
        '"Data tidak ditemukan, periksa kembali penulisan kata"';

    await promiseTheaterIXX().then((data1) => {
        data1.filter((elemen) => {
            if (elemen.hasil === "marah") {
                dataMarah.push(elemen.hasil);
            } else {
                dataTidakMarah.push(elemen.hasil);
            }
        });
    });

    await promiseTheaterVGC().then((data2) => {
        data2.filter((elemen) => {
            if (elemen.hasil === "marah") {
                dataMarah.push(elemen.hasil);
            } else {
                dataTidakMarah.push(elemen.hasil);
            }
        });
    });

    if (ekspresi === "marah") {
        return dataMarah.length;
    } else if (ekspresi === "tidak marah") {
        return dataTidakMarah.length;
    } else {
        return dataTidakAda;
    }
};

module.exports = {
    promiseOutput,
};
