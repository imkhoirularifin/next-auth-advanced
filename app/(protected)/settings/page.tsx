import { auth, signOut } from '@/auth';
import { Button } from '@/components/ui/button';

export default async function page() {
	const session = await auth();

	return (
		<div>
			<h1>Settings</h1>
			<p>Logged in as {JSON.stringify(session)}</p>
			<form
				action={async () => {
					'use server';
					await signOut();
				}}
			>
				<Button>Sign out</Button>
			</form>
		</div>
	);
}
