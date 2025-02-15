// Import dependensi yang diperlukan
import { v4 as uuidv4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { db } from "@/db/db";
import { markers } from "@/db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

// Fungsi untuk memeriksa apakah pengguna adalah admin
async function isUserAdmin(): Promise<boolean> {
  const supabase = createClient();

  const { data, error } = await (await supabase).auth.getUser();
  if (error || !data.user) {
    return false;
  }

  const role = data.user.app_metadata?.role;
  return role === "admin";
}

// API handler untuk menambahkan marker baru ke tabel `markers`
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // Cek apakah pengguna adalah admin
    const isAdmin = await isUserAdmin();
    if (!isAdmin) {
      return NextResponse.json(
        { success: false, message: "You do not have permission to perform this action." },
        { status: 403 }
      );
    }

    // Parse body request
    const formData = await req.formData();
    const lat = formData.get("lat") as string;
    const lng = formData.get("lng") as string;
    const title = formData.get("title") as string;
    const desc = formData.get("desc") as string;
    const loc = formData.get("loc") as string;
    const province = formData.get("province") as string;
    const city = formData.get("city") as string;

    // Validasi input
    if (!lat || !lng || !title || !desc || !loc) {
      return NextResponse.json(
        { success: false, message: "All required fields must be provided." },
        { status: 400 }
      );
    }

    // Buat data marker baru
    const newMarker = {
      id: uuidv4(),
      lat,
      lng,
      title,
      desc,
      loc,
      province: province ?? null,
      city: city ?? null,
    };

    // Masukkan data ke tabel `markers`
    
    await db.insert(markers).values(newMarker)


    return NextResponse.json(
      { success: true, message: "Marker added successfully." },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}


export async function GET(): Promise<NextResponse> {
    try {

      const data = await db.select().from(markers)
  
      return NextResponse.json(
        { success: true, data },
        { status: 200 }
      );
    } catch (err) {
      return NextResponse.json(
        { success: false, message: "An unexpected error occurred." },
        { status: 500 }
      );
    }
  }
  

// API handler untuk mengedit marker di tabel `markers`
export async function PUT(req: NextRequest): Promise<NextResponse> {
  try {

    // Cek apakah pengguna adalah admin
    const isAdmin = await isUserAdmin();
    if (!isAdmin) {
      return NextResponse.json(
        { success: false, message: "You do not have permission to perform this action." },
        { status: 403 }
      );
    }

    // Parse body request
    const formData = await req.formData();
    const id = formData.get("id") as string;
    const lat = formData.get("lat") as string;
    const lng = formData.get("lng") as string;
    const title = formData.get("title") as string;
    const desc = formData.get("desc") as string;
    const loc = formData.get("loc") as string;
    const province = formData.get("province") as string;
    const city = formData.get("city") as string;


    // Validasi input
    if (!id || !lat || !lng || !title || !desc || !loc) {
      return NextResponse.json(
        { success: false, message: "All required fields must be provided." },
        { status: 400 }
      );
    }

    // Update data marker
    await db.update(markers).set({ lat, lng, title, desc, loc, province, city }).where(eq(markers.id, id))

    return NextResponse.json(
      { success: true, message: "Marker updated successfully." },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  try {

    // Cek apakah pengguna adalah admin
    const isAdmin = await isUserAdmin();
    if (!isAdmin) {
      return NextResponse.json(
        { success: false, message: "You do not have permission to perform this action." },
        { status: 403 }
      );
    }

    const formData = await req.formData();
    const id = formData.get("id") as string;

    // Validasi input
    if (!id) {
      return NextResponse.json(
        { success: false, message: "Marker ID must be provided." },
        { status: 400 }
      );
    }

    // Hapus marker dari tabel
    await db.delete(markers).where(eq(markers.id, id))

    return NextResponse.json(
      { success: true, message: "Marker deleted successfully." },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}