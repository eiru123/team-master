import { NextResponse, type NextRequest } from 'next/server'
import firestore from "firebaseConfig/firestore"
import { doc, getDoc, collection, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const id = searchParams.get('id')
    if (!id || typeof id !== 'string') {
        return new Response(`Invalid document ID`, {
            status: 400,
        })
    }

    try {
      const docRef = doc(firestore, 'posts', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return new NextResponse(JSON.stringify({ id: docSnap.id, ...docSnap.data() }),{ status: 200, headers: { 'Content-Type': 'application/json' } });
      } else {
        return new NextResponse(`Document not found`, {
            status: 404,
        })
      }
    } catch (e) {
        return new NextResponse(`Failed to read document`, {
            status: 500,
        })
    }
}

export async function PUT(request: Request) {
    return new Response('Hello, from API!');
}
  
export async function POST(request: Request) {
    return new Response('Hello, from API!');
}
  
export async function DELETE(request: Request) {
    return new Response('Hello, from API!');
}
  