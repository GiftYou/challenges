CREATE TABLE jurusan(
    kode_jurusan TEXT PRIMARY KEY, 
    nama_jurusan VARCHAR(100)
    );


    INSERT INTO jurusan(kode_jurusan, nama_jurusan)VALUES(00323, 'TI');
    INSERT INTO jurusan(kode_jurusan, nama_jurusan)VALUES(00893, 'AKUTANSI');
    INSERT INTO jurusan(kode_jurusan, nama_jurusan)VALUES(00923, 'TKR');
    INSERT INTO jurusan(kode_jurusan, nama_jurusan)VALUES(00534, 'RPL');
-- CREATE TABLE mahasiswa(
--     nim TEXT,
--     -- nama VARCHAR(100),
--     nama_mahasiswa VARCHAR(100),
--     alamat VARCHAR(100),
--     kode_jurusan TEXT VARCHAR(5),
--     umur INTEGER,
--     nilai TEXT VARCHAR(1),
--     kode_mk INT,
--     nip TEXT
-- );

CREATE TABLE mahasiswa(
    nim TEXT,
    -- nama VARCHAR(100),
    nama_mahasiswa VARCHAR(100),
    alamat VARCHAR(100),
    kode_jurusan TEXT VARCHAR(5),
    umur INTEGER,
    kode_mk INT,
    nip TEXT
);

    INSERT INTO MAHASISWA(NIM, NAMA_MAHASISWA, ALAMAT, KODE_JURUSAN, umur, kode_mk,nip)VALUES(00123332,'Christian','BANDUNG', 00323, 27, 2243, 00443951);
    INSERT INTO MAHASISWA(NIM, NAMA_MAHASISWA, ALAMAT, KODE_JURUSAN, umur, nilai,kode_mk,nip)VALUES(00123332,'Christian','BANDUNG', 00323, 27, 'C', 2209, 00443951);
    INSERT INTO MAHASISWA(NIM, NAMA_MAHASISWA, ALAMAT, KODE_JURUSAN, umur, nilai,kode_mk,nip)VALUES(00123332,'Christian','BANDUNG', 00323, 27, 'B', 2299, 00443951);
    INSERT INTO MAHASISWA(NIM, NAMA_MAHASISWA, ALAMAT, KODE_JURUSAN, umur, nilai,kode_mk,nip)VALUES(00123332,'Christian','BANDUNG', 00323, 27, 'A', 2455, 00443951);

    -- INSERT INTO MAHASISWA(NIM, NAMA, ALAMAT, KODE_JURUSAN)VALUES(00213345,'ziden','JAKARTA', 00923);

    INSERT INTO MAHASISWA(NIM, NAMA_MAHASISWA, ALAMAT, KODE_JURUSAN, umur, kode_mk,nip)VALUES(00836565,'ABU','JAKARTA', 00893, 32, 2209, 00997343);
    INSERT INTO MAHASISWA(NIM, NAMA_MAHASISWA, ALAMAT, KODE_JURUSAN, umur, nilai,kode_mk,nip)VALUES(00836565,'ABU','JAKARTA', 00893, 32, 'A', 2243, 00997343);
    INSERT INTO MAHASISWA(NIM, NAMA_MAHASISWA, ALAMAT, KODE_JURUSAN, umur, nilai,kode_mk,nip)VALUES(00836565,'ABU','JAKARTA', 00893, 32, 'C', 2299, 00997343);
    INSERT INTO MAHASISWA(NIM, NAMA_MAHASISWA, ALAMAT, KODE_JURUSAN, umur, nilai,kode_mk,nip)VALUES(00836565,'ABU','JAKARTA', 00893, 32, 'D', 2455, 00997343);

    INSERT INTO MAHASISWA(NIM, NAMA_MAHASISWA, ALAMAT, KODE_JURUSAN, umur, kode_mk,nip)VALUES(00213345,'ziden','JAKARTA', 00923, 15, 2209, 00443951);
    INSERT INTO MAHASISWA(NIM, NAMA_MAHASISWA, ALAMAT, KODE_JURUSAN, umur, nilai,kode_mk,nip)VALUES(00213345,'ziden','JAKARTA', 00923, 15, 'D', 2243, 00443951);
    INSERT INTO MAHASISWA(NIM, NAMA_MAHASISWA, ALAMAT, KODE_JURUSAN, umur, nilai,kode_mk,nip)VALUES(00213345,'ziden','JAKARTA', 00923, 15, 'D', 2299, 00443951);
    INSERT INTO MAHASISWA(NIM, NAMA_MAHASISWA, ALAMAT, KODE_JURUSAN, umur, nilai,kode_mk,nip)VALUES(00213345,'ziden','JAKARTA', 00923, 15, 'C', 2455, 00443951);


    INSERT INTO MAHASISWA(NIM, NAMA_MAHASISWA, ALAMAT, KODE_JURUSAN, umur, kode_mk,nip)VALUES(00213445,'surya','JAKARTA', 00923, 18, 2299, 00332112);
    INSERT INTO MAHASISWA(NIM, NAMA_MAHASISWA, ALAMAT, KODE_JURUSAN, umur, nilai,kode_mk,nip)VALUES(00994923,'dipha','JATENG', 00534, 26, 'B', 2455, 00997343);
    INSERT INTO MAHASISWA(NIM, NAMA_MAHASISWA, ALAMAT, KODE_JURUSAN, umur, nilai,kode_mk,nip)VALUES(00996933,'dipha2','JATENG', 00534, 25, 'E', 2455, 00332112);
    INSERT INTO MAHASISWA(NIM, NAMA_MAHASISWA, ALAMAT, KODE_JURUSAN, umur, nilai,kode_mk,nip)VALUES(00794923,'dipha3','JATENG', 00534, 34, 'D', 2455, 00443951);
    INSERT INTO MAHASISWA(NIM, NAMA_MAHASISWA, ALAMAT, KODE_JURUSAN, umur, nilai,kode_mk,nip)VALUES(00997923,'dipha4','JATENG', 00534, 29, 'D', 2455, 00332112);
    INSERT INTO MAHASISWA(NIM, NAMA_MAHASISWA, ALAMAT, KODE_JURUSAN, umur, nilai,kode_mk,nip)VALUES(00998923,'dipha5','JATENG', 00534, 22, 'D', 2455, 00997343);
    

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

    INSERT INTO MATAKULIAH(KODE_MK, SKS, NAMA)VALUES(2209, 41, 'inggris');
    INSERT INTO MATAKULIAH(KODE_MK, SKS, NAMA)VALUES(2243, 41, 'inggris');
    INSERT INTO MATAKULIAH(KODE_MK, SKS, NAMA)VALUES(2299, 40, 'matematika');
    INSERT INTO MATAKULIAH(KODE_MK, SKS, NAMA)VALUES(2455, 43, 'data mining');

CREATE TABLE kontrak(
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    nim TEXT,
    nip TEXT,
    kode_jurusan TEXT,
    kode_mk TEXT,
    nilai TEXT
);

    INSERT INTO KONTRAK(ID, NIM, NIP, KODE_JURUSAN, KODE_MK, nilai)VALUES(null, 00123332, 00443951, 00323, 2243, 'A');
    INSERT INTO KONTRAK(ID, NIM, NIP, KODE_JURUSAN, KODE_MK, nilai)VALUES(null, 00123332, 00443951, 00323, 2209, 'B');
    INSERT INTO KONTRAK(ID, NIM, NIP, KODE_JURUSAN, KODE_MK, nilai)VALUES(null, 00123332, 00443951, 00323, 2299, 'C');
    INSERT INTO KONTRAK(ID, NIM, NIP, KODE_JURUSAN, KODE_MK, nilai)VALUES(null, 00123332, 00443951, 00323, 2455, 'D');

    INSERT INTO KONTRAK(ID, NIM, NIP, KODE_JURUSAN, KODE_MK, nilai)VALUES(null, 00836565, 00997343, 00323, 2243, 'C');
    INSERT INTO KONTRAK(ID, NIM, NIP, KODE_JURUSAN, KODE_MK, nilai)VALUES(null, 00836565, 00997343, 00323, 2209, 'A');
    INSERT INTO KONTRAK(ID, NIM, NIP, KODE_JURUSAN, KODE_MK, nilai)VALUES(null, 00836565, 00997343, 00323, 2299, 'A');
    INSERT INTO KONTRAK(ID, NIM, NIP, KODE_JURUSAN, KODE_MK, nilai)VALUES(null, 00836565, 00997343, 00323, 2455, 'A');

    INSERT INTO KONTRAK(ID, NIM, NIP, KODE_JURUSAN, KODE_MK, nilai)VALUES(null, 00213345, 00332112, 00323, 2243, 'A');
    INSERT INTO KONTRAK(ID, NIM, NIP, KODE_JURUSAN, KODE_MK, nilai)VALUES(null, 00213345, 00332112, 00323, 2209, 'D');
    INSERT INTO KONTRAK(ID, NIM, NIP, KODE_JURUSAN, KODE_MK, nilai)VALUES(null, 00213345, 00332112, 00323, 2299, 'C');
    INSERT INTO KONTRAK(ID, NIM, NIP, KODE_JURUSAN, KODE_MK, nilai)VALUES(null, 00213345, 00332112, 00323, 2455, 'A');

    INSERT INTO KONTRAK(ID, NIM, NIP, KODE_JURUSAN, KODE_MK, nilai)VALUES(null, 00213445, 00997343, 00323, 2243, 'A');
    INSERT INTO KONTRAK(ID, NIM, NIP, KODE_JURUSAN, KODE_MK, nilai)VALUES(null, 00213445, 00997343, 00323, 2209, 'A');
    INSERT INTO KONTRAK(ID, NIM, NIP, KODE_JURUSAN, KODE_MK, nilai)VALUES(null, 00213445, 00997343, 00323, 2299, 'C');
    INSERT INTO KONTRAK(ID, NIM, NIP, KODE_JURUSAN, KODE_MK, nilai)VALUES(null, 00213445, 00997343, 00323, 2455, 'C');

-- kode jurusan di mahasiswa tidak memakai primary key



SELECT mahasiswa.nama_mahasiswa FROM mahasiswa ORDER BY umur DESC;

SELECT mahasiswa.nama_mahasiswa,jurusan.nama_jurusan,dosen.nama FROM mahasiswa INNER JOIN jurusan ON mahasiswa.kode_jurusan=jurusan.kode_jurusan INNER JOIN dosen ON mahasiswa.nip=dosen.nip  WHERE nilai > 'C';

SELECT mahasiswa.nama_mahasiswa from mahasiswa WHERE nilai > 'B';

SELECT mahasiswa.nama_mahasiswa,matakuliah.nama,kontrak.nilai FROM mahasiswa INNER JOIN matakuliah ON kontrak.kode_mk=matakuliah.kode_mk INNER JOIN kontrak ON mahasiswa.nim=kontrak.nim WHERE nilai > 'B';