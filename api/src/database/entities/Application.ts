import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface IApplication {
  title: string;
  link: string;
  icon?: string;
  group: string;
}

@Entity()
class Application {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  title: string;

  @Column()
  link: string;

  @Column({ default: "icon" })
  icon: string;

  @Column()
  group: string;
}

export default Application;
