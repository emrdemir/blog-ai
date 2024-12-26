import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { siteConfig } from '../config/site';

export default function SocialLinks() {
  return (
    <div className="flex gap-4 justify-center mt-4">
      <a
        href={siteConfig.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="GitHub"
      >
        <FaGithub className="w-6 h-6" />
      </a>
      <a
        href={siteConfig.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-700 transition-colors"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="w-6 h-6" />
      </a>
    </div>
  );
} 