$(document).ready(() => {
    const categoryButtons = $(".category-btn");
    const projectItems = $(".project-item");

    categoryButtons.click(function () {
        const category = $(this).attr("data-category");

        // Tambahkan animasi smooth transition
        projectItems.removeClass("visible").css("opacity", "0").css("transform", "scale(0.9)");
        
        // Filter berdasarkan kategori
        setTimeout(() => {
            projectItems.hide();
            if (category === "all") {
                projectItems.show().addClass("visible").css("opacity", "1").css("transform", "scale(1)");
            } else {
                projectItems.filter(`[data-category="${category}"]`).show().addClass("visible").css("opacity", "1").css("transform", "scale(1)");
            }
        }, 200);

        // Update kelas aktif pada tombol
        categoryButtons.removeClass("active btn-primary").addClass("btn-outline-primary");
        $(this).addClass("active btn-primary").removeClass("btn-outline-primary");
    });

    // Tampilkan semua project-item di awal
    projectItems.addClass("visible").css("opacity", "1").css("transform", "scale(1)");
});
