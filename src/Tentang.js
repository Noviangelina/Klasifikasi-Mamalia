import React, { forwardRef } from 'react';
import Image from './images/landingpage2.png';

const Tentang = forwardRef((props, ref) => {
  return (
    <section style={{ backgroundColor: '#F8F8F8', width: '100%'}} ref={ref}>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-start">
          <img src={Image} alt="mockup" style={{ width: '734px', height: '484px' }} />
        </div>
        <div className="ml-auto place-self-center lg:col-span-7">
          <p className="max-w-2xl mb-4 text-[24px] font-semibold tracking-tight leading-none text-left text-gradient font-poppins">
            APAKAH KAMU TAHU APA SAJA JENIS MAMALIA?
          </p>
          <p className="text-black text-left px-4 text-[14px] font-poppins">
            1. Plasentalia (Mamalia Berplasenta) adalah kelompok mamalia yang embrionya berkembang di dalam rahim ibu dan mendapatkan nutrisi melalui plasenta.
            <br /><br />
            2. Marsupialia (Mamalia Berkantung) kelompok mamalia yang melahirkan anak yang belum sepenuhnya berkembang. 
            <br /> Setelah dilahirkan, anak-anak ini menyelesaikan perkembangan mereka di dalam kantung khusus yang terdapat di perut ibu, 
            <br/> yang disebut marsupium.
            <br /><br />
            3. Monotremata (Mamalia Bertelur) kelompok mamalia yang bertelur dan mengerami telurnya di luar tubuh. 
            <br /> Setelah telur menetas, anak-anak yang menetas kemudian disusui oleh ibunya.
          </p>
        </div>
      </div>
    </section>
  );
});

export default Tentang;
