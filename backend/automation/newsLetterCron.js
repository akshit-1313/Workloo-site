import cron from "node-cron"
import { Job } from "../models/jobSchema.js";
import { User } from "../models/userSchema.js"
import { sendEmail } from "../utils/sendEmail.js"

export const newsLetterCron = () => {
    cron.schedule("*/60 * * * *", async () => {
        console.log("Running Cron Automation");
        const jobs = await Job.find({ NewsLettersSent: false });
        for (const job of jobs) {
            try {
                const filteredUsers = await User.find({
                    $or: [
                        { "niches.firstNiche": job.jobNiche },
                        { "niches.secondNiche": job.jobNiche },
                        { "niches.thirdNiche": job.jobNiche },
                    ],
                });
                for (const user of filteredUsers) {
                    const subject = `Urgent Opportunity: ${job.title} in ${job.jobNiche} - Immediate Openings`;
                    const message = `Dear ${user.name},We are excited to inform you about an urgent job opportunity that aligns with your expertise. 
                    ${job.companyName} is currently seeking a ${job.title}, and they are looking to fill this position immediately.
                    **Job Details:**
                    - **Position:** ${job.title}
                    - **Company:** ${job.companyName}
                    - **Location:** ${job.location}
                    - **Salary:** ${job.salary}
                    Given the urgency of this opening, we encourage you to act quickly. 
                    High-demand positions like this are filled rapidly, and this could be a great chance to advance your career.
                    Should you need any assistance during your application process, please don't hesitate to reach out.
                    Best regards,
                    Team workloom`;
                    sendEmail({
                        email: user.email,
                        subject,
                        message,
                    });
                }
                job.NewsLettersSent=true;
                await job.save();
            } catch (error) {
                console.log("ERROR IN NODE CRON CATCH BLOCK");
                return next(console.error(error || "Some error in Cron."));
            }
        }

    })

} 