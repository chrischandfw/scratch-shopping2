const SUPABASE_URL = '"https://wkkubdeijvrntdmunqer.supabase.co"';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indra3ViZGVpanZybnRkbXVucWVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTM1MTcsImV4cCI6MTk2MzEyOTUxN30.qE-NCGctQQqftyEJnJ49hNdOGf4jDNo61YYMlpDAr2g';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createItem() {
    const response = await client
        .from('shopping_list')
        .insert('item');

    return response.body;
}

export async function getItems() {
    const response = await client
        .from('shopping_list')
        .select('*');

    return response.body;
}

export async function deleteAllItems() {
    const user = await getUser();
    const response = await client
        .from('shopping_list')
        .delete()
        .match({ user_id: user.id });

    return response.body;
}

export async function buyItem(id) {
    const response = await client
        .from('shopping_list')
        .update({ is_bought: true })
        .match({ id });

    return response.body;
}


export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./other-page');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

// function checkError({ data, error }) {
//     return error ? console.error(error) : data;
// }
