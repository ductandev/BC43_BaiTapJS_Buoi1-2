function tongTien(){
    // Input: soNgayLam: number; luong1Ngay: number
    var soNgayLam = document.getElementById('soNgayLam').value;
    var luong1Ngay = 100000;

    // Output: number
    var tongTienLuong = 0;

    // Process: xử lý
    tongTienLuong = luong1Ngay * soNgayLam;

    // In giá trị output ra màn hình
    console.log("Tổng Lương là:", tongTienLuong);

    // Truy xuất đến thẻ thông báo
    var divThongBao = document.getElementById('thongBao1');
    divThongBao.innerHTML = tongTienLuong;
    divThongBao.className = 'mt-2 bg-success text-white text-center p-3';
}

function tinhTrungBinh(){
    // Input: giaTri1, giaTri2, giaTri3, giaTri4, giaTri5 : number
    var giaTri1 = document.getElementById('soThuc1').value;
    var giaTri2 = document.getElementById('soThuc2').value;
    var giaTri3 = document.getElementById('soThuc3').value;
    var giaTri4 = document.getElementById('soThuc4').value;
    var giaTri5 = document.getElementById('soThuc5').value;

    // Output: number
    var tagTrungBinh = 0;

    // Process: xử lý
    tagTrungBinh =  (Number(giaTri1) + Number(giaTri2) + Number(giaTri3) + Number(giaTri4) + Number(giaTri5)) / 5;
    
    // In giá trị output ra màn hình
    console.log("Giá trị trung bình là:", tagTrungBinh);

    // Truy xuất đến thẻ thông báo
    var divThongBao = document.getElementById('thongBao2');
    divThongBao.innerHTML = tagTrungBinh;
    divThongBao.className = 'mt-2 bg-success text-white text-center p-3';
}

function tienQuyDoi(){
    // Input: usd : number, menhGiaVnd : number
    var usd = document.getElementById('usd').value;
    var menhGiaVnd = 23500;

    // Output: ketQuaChuyenDoi: number
    var ketQuaChuyenDoi = 0;
    
    // Process: xử lý
    ketQuaChuyenDoi = usd * menhGiaVnd;

    // In giá trị output ra màn hình
    console.log("Kết quả chuyển đổi USD sang Vnđ là: ", ketQuaChuyenDoi + 'VND');

    // Truy xuất đến thẻ thông báo
    var divThongBao = document.getElementById('thongBao3');
    divThongBao.innerHTML = ketQuaChuyenDoi + ' VND';
    divThongBao.className = 'mt-2 bg-success text-white text-center p-3';
}

function dienTichVaChuVi(){
    // Input: tagChieuDai: number, tagChieuRong: number;
    var tagChieuDai = document.getElementById('chieuDai').value;
    var tagChieuRong = document.getElementById('chieuRong').value;

    //Output: dienTich: number; chuVi: number
    var dienTich, chuVi = 0;

    // Process: xử lý
    dienTich = tagChieuDai * tagChieuRong;
    chuVi = (Number(tagChieuDai) + Number(tagChieuRong)) * 2;

    // In giá trị output ra màn hình
    console.log("Diện Tích HCN là: ", dienTich);
    console.log("Chu Vi HCN là: ", chuVi);
    
    // Truy xuất đến thẻ thông báo
    var divThongBao = document.getElementById('thongBao4');
    divThongBao.innerHTML = '- Diện tích là: ' + dienTich + '<br>' + '- Chu vi là: ' + chuVi;
    divThongBao.className = 'mt-2 bg-success text-white text-center p-3';
}

function tinhTong2KySo(){
    // Input: tagKySo: number;
    var tagKySo = document.getElementById('kySo').value;

    // Output: tong2KySo: number
    var tong2KySo = 0;

    // Process: xử lý
    tagKySo = parseInt(tagKySo)
    var hangDonVi = tagKySo % 10;
    var hangChuc = tagKySo / 10; 
    tong2KySo = hangDonVi + parseInt(hangChuc);

    // In giá trị output ra màn hình
    console.log("Tổng 2 ký số là: ", tong2KySo);

    // Truy xuất đến thẻ thông báo
    var divThongBao = document.getElementById('thongBao5');
    divThongBao.innerHTML = tong2KySo;
    divThongBao.className = 'mt-2 bg-success text-white text-center p-3';


}