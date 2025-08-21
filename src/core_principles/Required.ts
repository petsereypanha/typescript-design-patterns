interface UserProfile {
    name: string
    email: string
    boi?: string
    location?: string
}
type CompleteUserProfile = Required<UserProfile>
export function displayPublicProfile(profile: CompleteUserProfile): void {
    console.log(`Name: ${profile.name}, Email: ${profile.email}`)
}

const incompleteProfile = { name: "John Doe" }
// Compilation error: email is missing
// const completeProfile: CompleteUserProfile = { name: "Jane Doe", email: "jane.doe@example.com" }
// displayPublicProfile(completeProfile)