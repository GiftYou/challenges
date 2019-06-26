CREATE TABLE jurusan(
    kode_jurusan TEXT PRIMARY KEY, 
    nama_jurusan VARCHAR(100)
    );


    INSERT INTO jurusan(kode_jurusan, nama_jurusan)VALUES(00323, 'TI');
    INSERT INTO jurusan(kode_jurusan, nama_jurusan)VALUES(00893, 'AKUTANSI');
    INSERT INTO jurusan(kode_jurusan, nama_jurusan)VALUES(00444, 'TI');
CREATE TABLE mahasiswa(
    nim TEXT PRIMARY KEY,
    -- nama VARCHAR(100),
    nama_mahasiswa VARCHAR(100),
    alamat VARCHAR(100),
    kode_jurusan TEXT
);

    INSERT INTO MAHASISWA(NIM, NAMA_MAHASISWA, ALAMAT, KODE_JURUSAN)VALUES(00123332,'Christian','BANDUNG', 00323);
    INSERT INTO MAHASISWA(NIM, NAMA_MAHASISWA, ALAMAT, KODE_JURUSAN)VALUES(00836565,'ABU','JAKARTA', 00893);
    -- INSERT INTO MAHASISWA(NIM, NAMA, ALAMAT, KODE_JURUSAN)VALUES(00213345,'ziden','JAKARTA', 00923);
    INSERT INTO MAHASISWA(NIM, NAMA, ALAMAT, KODE_JURUSAN)VALUES(00213345,'ziden','JAKARTA', 00923);

CREATE TABLE dosen(
    nip TEXT PRIMARY KEY,
    nama VARCHAR(100)
);

    INSERT INTO DOSEN(NIP, NAMA)VALUES(00443951, 'rubi');
    INSERT INTO DOSEN(NIP, NAMA)VALUES(00332112, 'surya');
    INSERT INTO DOSEN(NIP, NAMA)VALUES(00997343, 'dipa');

CREATE TABLE matakuliah(
    kode_mk TEXT PRIMARY KEY,
    sks VARCHAR(100),
    nama VARCHAR(100)
);

    INSERT INTO MATAKULIAH(KODE_MK, SKS, NAMA)VALUES(2243, 42, 'teknik informatika');
    INSERT INTO MATAKULIAH(KODE_MK, SKS, NAMA)VALUES(2209, 41, 'akutansi');
    INSERT INTO MATAKULIAH(KODE_MK, SKS, NAMA)VALUES(2299, 40, 'teknik informatika');

CREATE TABLE kontrak(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    nim TEXT,
    nip TEXT,
    kode_jurusan TEXT,
    kode_mk TEXT
);

    INSERT INTO KONTRAK(ID, NIM, NIP, KODE_JURUSAN, KODE_MK)VALUES(1, 00123332, 00443951, 00323, 2243);
    INSERT INTO KONTRAK(ID, NIM, NIP, KODE_JURUSAN, KODE_MK)VALUES(1, 00836565, 00332112, 00893, 2209);
    INSERT INTO KONTRAK(ID, NIM, NIP, KODE_JURUSAN, KODE_MK)VALUES(1, 00213345, 00443951, 00444, 2243);
-- kode jurusan di mahasiswa tidak memakai primary key