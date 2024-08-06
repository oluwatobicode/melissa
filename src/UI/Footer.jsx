function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <p className="text-[#8c8c8c] text-[1.2rem] p-5 border-t-[.9px] border-t-[#8c8c8c]">
        &copy; Melissa Onwuka {year}
      </p>
    </div>
  );
}

export default Footer;
