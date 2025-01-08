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
      const docRef = doc(firestore, 'games', id);
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

export async function PUT(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const id = searchParams.get('id')
    if (!id || typeof id !== 'string') {
        return new NextResponse(JSON.stringify({ error: 'Invalid document ID' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
    }
    const data = await req.json();
    try {
      const docRef = doc(firestore, 'games', id);
      await updateDoc(docRef, data);
      return new NextResponse('Game updated', { status: 200 });
    } catch (e) {
        return new NextResponse(`Failed to read document`, {
            status: 500,
        })
    }
}
  
export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        console.log('data:', data);
        const docRef = await addDoc(collection(firestore, 'games'), data);
        return new NextResponse(JSON.stringify({ id: docRef.id }),{ status: 200, headers: { 'Content-Type': 'application/json' } });

      } catch (e) {
        return new NextResponse(`Failed to create document`, {
            status: 500,
        })
      }
}
  
export async function DELETE(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const id = searchParams.get('id')    
    if (!id || typeof id !== 'string') {
        return new NextResponse(JSON.stringify({ error: 'Invalid document ID' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
    }
    try {
      const docRef = doc(firestore, 'games', id);
      await deleteDoc(docRef);
      return new NextResponse('Game updated', { status: 200 });
    } catch (e) {
        return new NextResponse(`Failed to create document`, {
            status: 500,
        })    
    }
}
  