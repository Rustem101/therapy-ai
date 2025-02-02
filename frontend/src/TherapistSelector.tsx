import { Button, Select } from "@chakra-ui/react";

export default function TherapistSelector({ onSelect }) {
  const personas = [
    { id: 'cbt', name: 'CBT Specialist' },
    { id: 'jungian', name: 'Jungian Analyst' }
  ];

  return (
    <Select
      placeholder="Choose your therapist"
      onChange={(e) => onSelect(e.target.value)}
      bg="white"
      borderRadius="xl"
      boxShadow="md"
    >
      {personas.map(p => (
        <option key={p.id} value={p.id}>{p.name}</option>
      ))}
    </Select>
  );
}